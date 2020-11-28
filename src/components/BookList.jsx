import React from "react";
import BookInfo from "./BookInfo";
import SearchBox from "./SearchBox";
import Loader from "../common/Loader";

const BookList = ({ value, onSearch, isLoading, books }) => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
          {!isLoading && <SearchBox value={value} onSearch={onSearch} />}
          {!isLoading && !books.length && <p>Search not found.</p>}
          {books.length ? (
            <h5 style={{ marginBottom: 20 }}>All Books</h5>
          ) : null}
        </div>
      </div>
      <div className="row">
        {isLoading ? (
          <Loader />
        ) : (
          books.map((book, index) => (
            <div
              key={book.id || index}
              className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            >
              <BookInfo book={book} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default BookList;
