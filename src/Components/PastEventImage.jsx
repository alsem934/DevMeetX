import React from 'react';
import LayOut from './Layout/Layout';
const PastEventsPage = () => {
  // Sample data for images and descriptions
  const pastEvents = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111116/573A3714_gkcfax.jpg',
      description: 'Friendships are made at DevMeetup V1!',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112153/22_itkptz.jpg',
      description: 'Networking sessions at DevMeetup V2.',
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112164/17_l9xqb8.jpg',
      description: 'Workshops and hands-on learning at DevMeetup V1.',
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112178/12_xqpvxm.jpg',
      description: 'Teamwork and collaboration at DevMeetup V2.',
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112143/30_jsgrfz.jpg',
      description: 'Fun moments at DevMeetup V1.',
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112133/34_ituygd.jpg',
        description: 'Inspiring talks at DevMeetup V2.',
      },
      {
        id: 7,
        image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112040/85_bfirx9.jpg',
        description: 'Inspiring talks at DevMeetup V2.',
      },
      {
        id: 8,
        image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112013/311_utbcdi.jpg',
        description: 'Inspiring talks at DevMeetup V2.',
      },
      {
        id: 9,
        image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111945/762_efziic.jpg',
        description: 'Inspiring talks at DevMeetup V2.',
      },{
        id: 10,
        image: 'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111983/734_jbbwog.jpg',
        description: 'Inspiring talks at DevMeetup V2.',
      },


  ];

  return (
    <LayOut>
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Here Friendships Are Made
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Relive the amazing moments from our past events. From networking sessions to inspiring talks, these images capture the spirit of DevMeetup.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.description}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-lg font-semibold px-4">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </LayOut>

  );
};

export default PastEventsPage;