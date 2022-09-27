import React from "react";

function Search({searchValue, onSearchChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange= {onSearchChange}//{() => console.log("Searching...")}
        value={searchValue}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
