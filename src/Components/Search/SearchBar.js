import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <div>
      <input
        className="search-input-field"
        type="search"
        placeholder="Search for GIFS"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
