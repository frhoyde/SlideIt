import React from "react";
import { BsSearch } from "react-icons/bs";

export default function search() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        // maxWidth: "70%",
      }}
    >
      <form>
        <input placeholder="Search Here.." style={{ minWidth: "400px" }} />
        <button
          style={{
            padding: "4px 10px",
            font: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
