import React from "react";

const Search = ({ placeholder, searchText, defaultValue }) =>
	<input type="text" placeholder={placeholder} onChange={searchText} value={defaultValue}/>;

export default Search;
