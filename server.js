require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
const cypto = require('crypto');
const http = require("http");
const mongoose = require("mongoose");
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const Grid  = require("gridfs-stream");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const Socketio = require("socket.io");
const Document = require("./Document");
const gridfsStream = require("gridfs-stream");


// connect to database
connectDB();
var conn = mongoose.connection;

// init GridFs
let gfs;

conn.once("open", ()=>{
    gfs = Grid(conn.db, mongoose.mongo);
});

// storage engine
var storage = new GridFsStorage({
    url: process.env.ATLAS_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

const app = express();
const port = process.env.PORT || 4000;

// const ser = http.createServer(app);
// const io = Socketio(ser);

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler
app.use(errorHandler);
const uri = process.env.ATLAS_URI;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});

/**** For Document Server *****/

// mongoose.connect("mongodb://localhost:3000/document", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const defaultValue = "";

io.on("connection", (socket) => {
  console.log("ConnecTed");
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;

  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
