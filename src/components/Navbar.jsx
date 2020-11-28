import React from "react";

const NavBar = ({ onAddBook, loading, error }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <a className="navbar-brand">
        <h3 className="font-weight-bold">Books</h3>
      </a>
      <button
        disabled={loading || error}
        onClick={onAddBook}
        className="btn btn-primary my-2 my-sm-0"
      >
        Create new book
      </button>
    </nav>
  );
};

export default NavBar;
