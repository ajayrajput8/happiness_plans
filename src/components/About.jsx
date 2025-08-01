import React from 'react';
import Navbar from './Navbar';

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center py-16 px-4 bg-blue-200">
  
        {/* Top 3 Feature Cards */}
        <div className="flex flex-row justify-center flex-wrap gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-6xl font-bold text-black mb-2">10K+ </h4>
            <p className="text-4xl text-black">Happy Customers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-6xl font-bold text-black mb-2">4.5 </h4>
            <p className="text-4xl text-black">Star Ratings</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center hover:scale-105 transition-transform duration-300">
            <h4 className="text-6xl font-bold text-black mb-2">20+</h4>
            <p className="text-4xl text-black">Unique Tours</p>
          </div>
        </div>

        <div className="w-3/4 bg-white p-10 rounded-xl shadow-lg text-center flex flex-col space-y-4">
          <h3 className="text-6xl font-bold text-black mb-4">About Us</h3>
          <p className="text-gray-700 text-lg">
            We are passionate travel planners committed to making your journeys smooth, memorable, and personalized.
            Whether you're chasing mountains or beach sunsets, we’ve got the perfect route and plan for you. We understand that planning a trip can be overwhelming, so we take care of all the details, from booking flights and hotels to arranging tours and activities.
In addition to travel planning, we specialize in event management, creating unforgettable experiences for corporate retreats, weddings, and other special occasions. Our team works closely with clients to ensure that every detail is perfect, from venue selection and decor to catering and entertainment.
So if you're looking for a trustworthy and reliable travel and event management company, look no further. 
          </p>
        </div>

      </section>

  );
}