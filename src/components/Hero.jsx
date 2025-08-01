import React from 'react';
import downloadImage from '../assets/download.png'
export default function Hero() {
  return (
    <section className="min-h-screen text-center py-20 bg-white flex flex-col justify-center items-center space-y-10 px-4">
  <div>
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Plan Your Trips</h2>
    <p className="text-base sm:text-lg text-gray-600 mb-6">We deliver quality and trust</p>
  </div>

  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 bg-blue-200 p-6 sm:p-10 lg:p-20 rounded-xl">
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-72 text-center hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">Simple Interface</h3>
      <p className="text-gray-600">Plan your trip with a user-friendly layout designed for ease and speed.</p>
    </div>

    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-72 text-center hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">Free to Use</h3>
      <p className="text-gray-600">All features are completely free — no hidden charges, ever.</p>
    </div>

    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-72 text-center hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">Cool Tour Routes</h3>
      <p className="text-gray-600">Discover hand-picked routes that make your travel unforgettable.</p>
    </div>
  </div>
</section>


  );
}
