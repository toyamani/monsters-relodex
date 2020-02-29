import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChenge }) => (
  <input
    className="search"
    type="search"
    placeholder="search monsters"
    onChange={handleChenge}
  />
);
