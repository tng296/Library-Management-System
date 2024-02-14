import React, { useState } from 'react';

const SearchBookPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = () => {
    };

    return (
        <div>
            <h1>Book Search</h1>
            <input
                type="text"
                placeholder="Enter book title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBookPage;
