import React from "react";
import { useState } from "react";

function Search({ searchTransaction }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="description"
        placeholder="Search your Recent Transactions"
        onChange={searchTransaction}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
