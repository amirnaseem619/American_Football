import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderprofile from "../assets/Profile_Pic.jpg";
import testimonials from "../assets/testimonials.webp";

const FeedbackSlider = () => {
  const feedbackData = [
    {
      name: "Muhammad Saqib",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id fugiat reprehenderit at provident? Mollitia magnam nostrum quam in possimus fugiat nihil libero, ut atque, odit aut ipsam asperiores id.",
      rating: 4.5,
      image: sliderprofile,
    },
    {
      name: "Muhammad Saqib",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id fugiat reprehenderit at provident? Mollitia magnam nostrum quam in possimus fugiat nihil libero, ut atque, odit aut ipsam asperiores id.",
      rating: 5,
      image: sliderprofile,
    },
    // Add more feedback data as needed
  ];

  return (
    <div
      className="relative py-10"
      style={{
        backgroundImage: `url(${testimonials})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "", // Keeps the background fixed
      }}
    >
      {/* White overlay with opacity */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-black text-center">
        <h2 className="text-2xl mb-5">Customer Feedback</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
        >
          {feedbackData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" p-8 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                <p className="text-gray-700  mx-auto mt-2">{item.feedback}</p>
                <div className="mt-2">
                  {item.rating} <i className="fa fa-star text-xs"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackSlider;
