import React from "react";
import LayOut from "../Layout/Layout";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function EventSections({venue, date}) {
  return (
    <LayOut>
       {/* Event Venue & Highlights */}
       <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Venue</h2>
          <p className="text-lg">📍 Location: {venue}</p>
          <p className="text-lg">📅 Date: {date}</p>
          <p className="mt-4 text-gray-700">Join us at this amazing venue for an unforgettable experience!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
          <p className="text-lg">🎤 Keynote by Chappi - Modern JavaScript</p>
          <p className="text-lg">💻 React Workshop - Build Scalable Apps</p>
          <p className="text-lg">🎉 Networking & Fun Activities</p>
        </div>
      </section>

     

<section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Event Photos & Fun Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative">
              <img src="https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112107/44_lmbiul.jpg" alt="Fun moment 1" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">🎉 Having a blast!</p>
            </div>
            <div className="relative">
              <img src="https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111983/734_jbbwog.jpg" alt="Fun moment 2" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">🎤 Amazing speakers!</p>
            </div>
            <div className="relative">
              <img src="https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111945/762_efziic.jpg" alt="Fun moment 3" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">💻 Hands-on coding sessions!</p>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default EventSections;
