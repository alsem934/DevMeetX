

// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-4 lg:text-5xl">About DevMeetup</h2>
//         <p className="text-lg text-gray-200 max-w-2xl mx-auto text-center mb-8">
//           DevMeetup is a global community of developers coming together to learn, share, and grow. Join us for exciting events, workshops, and networking opportunities.
//         </p>
//         <div className="flex justify-center">
//           <a href="/events" className="bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
//             View Our Events
//           </a>
//         </div>
//       </div>
//       {/* Optional decorative element */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10">
//         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
//           <path fill="currentColor" d="M0,192L48,165.3C96,139,192,85,288,64C384,43,480,53,576,64C672,75,768,85,864,98.7C960,112,1056,128,1152,138.7C1248,149,1344,155,1392,158.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from 'react';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">About DevMeetup</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl">
          DevMeetup is a global community of developers coming together to learn, share, and grow. Join us for exciting events, workshops, and networking opportunities.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;