import React from 'react';

export default function Services() {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-6xl font-semibold mb-10 text-center">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-2xl mb-3">Trip Planning</h4>
            <p className="text-gray-600">
              We handle every detail from itinerary design to hotel bookings ensuring a hassle-free travel experience tailored to your preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-2xl mb-3">On-Trip Coordination</h4>
            <p className="text-gray-600">
              From managing local transport to solving real-time issues, our team ensures your journey runs smoothly and safely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold text-2xl mb-3">Personalized Experiences</h4>
            <p className="text-gray-600">
              We curate unique experiences — cultural tours, adventure activities, food trails — tailored to your interests and pace.
            </p>
          </div>
          
        </div>
      </div>
    </section>

    );
  }