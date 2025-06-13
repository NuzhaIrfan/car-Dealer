import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CarCard({ car, darkMode }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-96 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card Container */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <motion.div
          className={`absolute w-full h-full backface-hidden rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} 
                     shadow-xl ${darkMode ? 'shadow-purple-900/30' : 'shadow-purple-800/20'}`}
          whileHover={{ 
            scale: 1.02,
            boxShadow: darkMode 
              ? '0 20px 25px -5px rgba(76, 29, 149, 0.3), 0 10px 10px -5px rgba(76, 29, 149, 0.1)'
              : '0 20px 25px -5px rgba(107, 33, 168, 0.2), 0 10px 10px -5px rgba(107, 33, 168, 0.1)'
          }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative overflow-hidden h-48">
            <motion.img 
              src={car.image} 
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </div>
          
          <div className="p-4">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {car.make} {car.model}
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {car.year} • {car.mileage.toLocaleString()} miles
            </p>
            <p className={`text-lg font-semibold mt-2 ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
              ${car.price.toLocaleString()}
            </p>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className={`absolute w-full h-full backface-hidden rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}
                     shadow-xl ${darkMode ? 'shadow-purple-900/30' : 'shadow-purple-800/20'}`}
          initial={{ rotateY: 180 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: darkMode 
              ? '0 20px 25px -5px rgba(76, 29, 149, 0.3), 0 10px 10px -5px rgba(76, 29, 149, 0.1)'
              : '0 20px 25px -5px rgba(107, 33, 168, 0.2), 0 10px 10px -5px rgba(107, 33, 168, 0.1)'
          }}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {car.make} {car.model} Details
          </h3>
          <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><span className="font-semibold">Year:</span> {car.year}</li>
            <li><span className="font-semibold">Mileage:</span> {car.mileage.toLocaleString()} miles</li>
            <li><span className="font-semibold">Fuel Type:</span> {car.fuelType}</li>
            <li><span className="font-semibold">Price:</span> ${car.price.toLocaleString()}</li>
            {car.features && (
              <li className="mt-4">
                <span className="font-semibold block mb-1">Features:</span>
                <ul className="list-disc pl-5 space-y-1">
                  {car.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}