import React from "react";

const SearchBox = ({ value, onSearch }) => {
  return (
    <input
      name="search"
      id="search"
      type="text"
      placeholder="search..."
      className="form-control mb-3"
      value={value}
      onChange={(e) => onSearch(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
