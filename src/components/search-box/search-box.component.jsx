import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, onInputChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onInputChange}
  />
);
