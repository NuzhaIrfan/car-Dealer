import { useState, useEffect, useCallback } from 'react';

export default function Filter({ cars, setFilteredCars, darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Get unique values
  const makes = [...new Set(cars.map(car => car.make))];
  const priceRanges = [
    { label: "Any Price", value: "" },
    { label: "Under $30k", value: "0-30000" },
    { label: "$30k - $50k", value: "30000-50000" },
    { label: "Over $50k", value: "50000-1000000" }
  ];

  // Memoized filter function
  const applyFilters = useCallback(() => {
    let results = cars;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(car => 
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply make filter
    if (selectedMake) {
      results = results.filter(car => car.make === selectedMake);
    }
    
    // Apply price filter
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      results = results.filter(car => car.price >= min && car.price <= max);
    }
    
    setFilteredCars(results);
  }, [cars, searchTerm, selectedMake, selectedPriceRange, setFilteredCars]);

  // Run filters when dependencies change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <div className="mb-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder=" "
          className={`w-full px-4 py-3 bg-transparent border-2 ${darkMode ? 'border-purple-400' : 'border-purple-600'} rounded-lg 
                    focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-purple-600'} peer
                    ${darkMode ? 'text-white' : 'text-gray-900'}`}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <label className={`absolute left-2 -top-2 px-1 ${darkMode ? 'bg-gray-900 text-purple-300' : 'bg-white text-purple-600'} 
                         text-sm transition-all
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4
                         peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm`}>
          Search by make/model
        </label>
      </div>

      {/* Make Selector */}
      <div className="relative">
        <select
          className={`appearance-none w-full px-4 py-3 bg-transparent border-2 ${darkMode ? 'border-purple-400' : 'border-purple-600'} 
                    rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-purple-600'} pr-8
                    ${darkMode ? 'text-white' : 'text-gray-900'}`}
          onChange={(e) => setSelectedMake(e.target.value)}
          value={selectedMake}
        >
          <option value="">All Makes</option>
          {makes.map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Price Range Selector */}
      <div className="relative">
        <select
          className={`appearance-none w-full px-4 py-3 bg-transparent border-2 ${darkMode ? 'border-purple-400' : 'border-purple-600'} 
                    rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-purple-400' : 'focus:ring-purple-600'} pr-8
                    ${darkMode ? 'text-white' : 'text-gray-900'}`}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          value={selectedPriceRange}
        >
          {priceRanges.map(range => (
            <option key={range.value} value={range.value}>{range.label}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className={`w-5 h-5 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}