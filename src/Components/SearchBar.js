import React, { useState } from 'react';


const SearchBar = ({ data, onSearch }) => {
    
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};


export default SearchBar;