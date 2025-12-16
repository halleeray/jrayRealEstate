import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiSlidersThin } from "react-icons/pi";
import "./SearchBar.css";

interface SearchProps {
  onSearch: (query: string, filters?: Filters) => void;
}

interface Filters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: string;
  bathrooms?: string;
}

function SearchBar({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query, filters);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbarform">
      <div className="input-container">
        <input
          id="searchbarInput"
          type="text"
          placeholder="Enter City, Address, Zip/Postal Code. . ."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="filtersButton"
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <PiSlidersThin />
        </button>
      </div>

      <button type="submit" className="searchButton">
        <FaSearch />
      </button>

      {filtersOpen && (
        <div className="filters-dropdown">
          <div className="dropdown-item">
            <input
              id="minPriceInput"
              type="number"
              placeholder="$ Min Price"
              value={filters.minPrice || ""}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: Number(e.target.value) })
              }
            />
          </div>
          <div className="dropdown-item">
            <input
              id="maxPriceInput"
              placeholder="$ Max Price"
              type="number"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
            />
          </div>
          <div className="dropdown-item">
            <select
              id="bedroomInput"
              value={filters.bedrooms || ""}
              onChange={(e) =>
                setFilters({ ...filters, bedrooms: e.target.value })
              }
            >
              <option value="Bedrooms">Bedrooms</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
              <option value="4+">4+</option>
            </select>
          </div>
          <div className="dropdown-item">
            <select
              id="bathroomInput"
              value={filters.bathrooms || ""}
              onChange={(e) =>
                setFilters({ ...filters, bathrooms: e.target.value })
              }
            >
              <option value="Bathrooms">Bathrooms</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
