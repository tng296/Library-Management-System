import React, { useState } from 'react';

const MovieSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [movies, setMovies] = useState<any[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(`localhost:3000/api/movies?query=${searchQuery}`);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <h2>Movie Search</h2>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    required
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;