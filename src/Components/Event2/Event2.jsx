import React from 'react';
import LayOut from '../Layout/Layout';
import EventSections from '../PastEvent/EventSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Event2() {
  return (
    <LayOut hideFooter={true}>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">DevMeetup V2</h1>
            <p className="text-xl mb-4">The second edition brought even more energy and excitement!</p>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="container mx-auto px-6 py-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Organizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
              <img src="/Images/Chappi.avif" alt="Organizer 1" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
              <h3 className="text-xl font-bold mb-1 text-black">Temkin Mengestu</h3>
              <p className="text-black animate-pulse">Senior Back-end Developer</p>
            </div>
            <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
              <img src="/Images/yeabsra.avif" alt="Organizer 2" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
              <h3 className="text-xl font-bold mb-1 text-black">Yeabsra</h3>
              <p className="text-black animate-pulse">Flutter Developer</p>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Sponsors</h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {["alx.jpeg", "chappa.avif", "Cbe.avif", "tele.avif", "telebirr.avif"].map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg text-center">
                    <img src={`/Images/${image}`} alt={`Sponsor ${index + 1}`} className="w-32 h-32 mx-auto mb-4 rounded-lg" />
                    <p className="text-gray-300">Sponsor {index + 1}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <EventSections venue={"Haya Hulet Mazoria, City Point, Addis Ababa"} date={"3"} />
      </div>
    </LayOut>
  );
}

export default Event2;
