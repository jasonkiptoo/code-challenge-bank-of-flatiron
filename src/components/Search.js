import React from "react";
import { useState } from "react";

function Search({ onChangeSearch }) {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    // setSearch({ ...search, [e.target.name]: e.target.value });

    setSearch(e.target.value);
    onChangeSearch(search);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="description"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
