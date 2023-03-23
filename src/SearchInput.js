import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debounce = (func, delay) => {};

  const handleSearch = debounce();

  const handleChange = (event) => {
    handleSearch();
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
