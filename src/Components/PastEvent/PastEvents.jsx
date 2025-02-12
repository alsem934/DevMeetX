


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import img1 from "../Image/573A3624"
// import img2 from "/Image/573A3624.JPG"
const PastEvents = () => {
  const pastEvents = [
    {
      title: "React Summit 2024",
      date: "November 15, 2024",
      description: "Join experts and developers to discuss the latest in React.",
      image:"file:///C:/Users/user/Downloads/573A3660.JPG ",
      link: "#",
    },
    {    
      title: "AI & Web3 Conference",
      date: "August 10, 2024",
      description: "Exploring the future of artificial intelligence and decentralized applications.",
      image: " /image/573A3627.JPG",
      link: "#",
    },
    {
      title: "Next.js Mastery Workshop",
      date: "June 20, 2024",
      description: "Hands-on Next.js workshop covering performance optimization.",
      image: "https://source.unsplash.com/600x400/?coding,developer",
      link: "#",
    },
    {
      title: "JavaScript Innovation Forum",
      date: "March 5, 2024",
      description: "Industry leaders discuss the future of JavaScript development.",
      image: "https://source.unsplash.com/600x400/?javascript,programming",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-6"
        >
          {pastEvents.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden width 100%">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                  <a href={event.link} className="text-blue-600 hover:underline mt-3 inline-block">
                    View Details →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PastEvents;
