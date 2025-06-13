import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CarCard from './components/CarCard';
import Filter from './components/Filter';
import Skeleton from './components/Skeleton';

export default function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate API fetch with delay
    setTimeout(() => {
      fetch('/data/cars.json')
        .then(res => res.json())
        .then(data => {
          setCars(data);
          setFilteredCars(data);
          setIsLoading(false);
        });
    }, 1500);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 relative">
        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 bg-purple-600 text-white p-2 rounded-full z-50 hover:bg-purple-700 transition-all shadow-lg"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">Premium Auto Gallery</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Find your dream car today</p>
        </div>

        {/* Filter Component */}
        <Filter cars={cars} setFilteredCars={setFilteredCars} darkMode={darkMode} />

        {/* Car Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <Skeleton key={i} darkMode={darkMode} />)}
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  index={index} 
                  darkMode={darkMode} 
                />
              ))}
            </div>
          </AnimatePresence>
        )}

        {/* Empty State */}
        {!isLoading && filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">No cars found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}