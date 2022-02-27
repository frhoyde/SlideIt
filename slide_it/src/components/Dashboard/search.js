import React from "react";
import { BsSearch } from "react-icons/bs";
import Avatar from "./avatar";

export default function search() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        marginLeft: "23rem",
        maxWidth: "70%",
      }}
    >
      <form>
        <input placeholder="Search Here.." style={{ minWidth: "400px" }} />
        <button
          style={{
            padding: "4px 10px",
            font: "12rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          <BsSearch />
        </button>
      </form>
      <div>
        <Avatar userName="Poushi"></Avatar>
      </div>
    </div>
  );
}
