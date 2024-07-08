import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleMinPriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: e.target.value,
    }));
  };

  const handleMaxPriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: e.target.value,
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }));
  };

  return (
    <div className="fixed p-4 bg-gray-100 w-64 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Search</label>
        <input
          type="text"
          name="search"
          value={filters.search || ''}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Min Price: {filters.minPrice}</label>
        <input
          type="range"
          name="minPrice"
          min="0"
          max="5000"
          step="100"
          value={filters.minPrice}
          onChange={handleMinPriceChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Max Price: {filters.maxPrice}</label>
        <input
          type="range"
          name="maxPrice"
          min="0"
          max="5000"
          step="100"
          value={filters.maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Color</label>
        <select
          name="color"
          value={filters.color}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="white">White</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
          <option value="Brown">Brown</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Size</label>
        <select
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="SM">SM</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
