import React from "react";
// import "../styles/BookInfo.css";

// custome css for block.
const customeStyle = {
  backgroundColor: "white",
  color: "#000",
  padding: 8,
  marginBottom: 24,
  paddingLeft: 20,
  borderRadius: 5,
  borderLeft: "5px solid #fdad59",
  boxShadow: "0 1px 6px rgba(32,33,36,.28)",
};

const BookInfo = ({ book }) => {
  return (
    <div style={customeStyle}>
      <h6>{book.volumeInfo ? book.volumeInfo.title : book.title}</h6>
      <p className="mb-0">
        Author : {book.volumeInfo ? book.volumeInfo.authors[0] : book.author}
      </p>
      <p className="mb-0">
        Publisher :{" "}
        {book.volumeInfo ? book.volumeInfo.publisher : book.publisher}
      </p>
      <p className="mb-0">
        Published Date :{" "}
        {book.volumeInfo ? book.volumeInfo.publishedDate : book.publishedDate}
      </p>
    </div>
  );
};

export default BookInfo;
