import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        placeholder="Search by address, city, or zipcode. . ."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="searchButton">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
