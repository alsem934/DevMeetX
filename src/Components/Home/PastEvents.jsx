




import React from 'react';
import { Link } from 'react-router-dom';







const PastEventsSection = () => {
  return (
    <section className="py-10 text-gray-800 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-6 md:text-4xl lg:text-5xl">Past Events</h2>
        
        {/* Event grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* V1 Event Details */}
          <div className="bg-white p-6 rounded shadow-md w-full mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-800">DevMeetup 1</h3>
            <h2 className="text-gray-600 mb-3">
              The first edition of DevMeetup was a huge success with over 200 attendees and 10 amazing talks.
            </h2>
            <a 
              href="/event1" 
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Go to Event 1
            </a>
          </div>

          {/* V2 Event Details */}
          <div className="bg-white p-6 rounded shadow-md w-full mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-800">DevMeetup 2</h3>
            <p className="text-gray-600 mb-3">
              The second edition brought even more energy with workshops, networking, and live coding sessions.
            </p>
            <Link
              to="/event2" 
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Go to Event 2
            </Link>
          </div>
        </div>
      </div>

      {/* Optional decorative element */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10"> */}
        {/* SVG or any other decorative element can be added here */}
      {/* </div> */}
    </section>
  );
};

export default PastEventsSection;