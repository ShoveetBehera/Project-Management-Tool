// frontend/src/components/Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Pass search value to parent
    };

    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={query}
            onChange={handleSearch}
        />
    );
};

export default Search;