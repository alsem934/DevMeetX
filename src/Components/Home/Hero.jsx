


import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center relative">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4 md:text-5xl lg:text-6xl">Welcome to DevMeetup!</h1>
        <p className="text-lg mb-8 md:text-xl lg:text-2xl">Connecting Developers, Building Communities.</p>
        <div className="justify-center flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
         <Link
  to="/past-events"
  className="bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-red-500 transition duration-300 transform hover:scale-105 inline-block cursor-pointer"
>
            Explore Past Events
          </Link>
          <Link
            to="/event3"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300 transform hover:scale-105 inline-block"
          >
            Join Event 3
          </Link>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-opacity-30"></div> */}
    </section>
  );
};

export default HeroSection;