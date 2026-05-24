import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomeBg from "../assets/HomeBg.avif";

const HomeSlider = () => {
  const feedbackData = [
    {
      Day: "2",
      feedback: "Days until the next match",
      background: HomeBg,
      Team1: "The Tigers",
      Team2: "The Bears"
    },
    {
      Day: "2",
      feedback: "Days until the next match",
      background: HomeBg,
      Team1: "The Tigers",
      Team2: "The Bears"
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative min-h-screen">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="h-full"
        speed={2000}
      >
        {feedbackData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen flex flex-col justify-center items-center relative"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div className="relative mx-2  flex items-center">
                <div className="h-20 w-12 sm:h-24 sm:w-16 absolute bg-[#eb9834] border-t border-t-[#2527ae] flex items-center justify-center left-0 z-10">
                  <h2 className="text-3xl sm:text-5xl text-white font-bold">{item.Day}</h2>
                </div>
                <div className="relative ml-12 sm:ml-16 z-0">
                  <p className="text-2xl sm:text-4xl text-white p-2 font-bold bg-[#2527ae] mt-2">{item.feedback}</p>
                </div>
              </div>

              <div className="flex items-center justify-center relative mt-5">
                <div
                  style={{
                    width: "160px",
                    height: "60px",
                    backgroundColor: "#4A90E2",
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.25rem", // Smaller font size for sm
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                  }}
                  className="w-40 sm:w-52 h-14 sm:h-16"
                >
                  <p>{item.Team1}</p>
                </div>

                <span
                  className="absolute text-3xl sm:text-5xl font-bold text-red-500 -rotate-12 px-2 sm:px-4 py-1 sm:py-2 z-10"
                  style={{
                    textShadow: `
                      -2px -2px 1px black, 
                      2px -2px 1px black, 
                      -2px 2px 1px black, 
                      2px 2px 1px black
                    `,
                  }}
                >
                  VS
                </span>

                <div
                  style={{
                    width: "160px",
                    height: "60px",
                    backgroundColor: "#eb9834",
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.25rem", // Smaller font size for sm
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                  }}
                  className="w-40 sm:w-52 h-14 sm:h-16"
                >
                  <p>{item.Team2}</p>
                </div>
              </div>

              <button
                onClick={goToNextSlide}
                className="absolute hidden sm:block right-5 top-1/2 transform -translate-y-1/2 bg-[#eb9834] hover:bg-[#2527ae] text-white p-2 sm:p-3 rounded"
              >
                Next
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
