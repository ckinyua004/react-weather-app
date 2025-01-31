import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city name"); // Optional: Handle empty input
      return;
    }
    onSearch(city); // Call the onSearch function passed from the parent
    setCity(""); // Clear the input field
  };

  return (
    <div>
      <input
        type="text"
        className="input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Validate that onSearch is a function
};

export default SearchBar;
