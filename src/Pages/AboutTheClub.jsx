import React from "react";
import AboutBg from "../assets/HomeBg.avif";
import Players from "../assets/Players.jpeg";
// Card Section
import team_large_1 from "../assets/team_large_1.webp";
import team_large_2 from "../assets/team_large_2.webp";
import team_large_3 from "../assets/team_large_3.webp";
// Team small
import team_small_1 from "../assets/team_small_1.webp";
import team_small_2 from "../assets/team_small_2.webp";
import team_small_3 from "../assets/team_small_3.webp";
import team_small_4 from "../assets/team_small_4.webp";
import team_small_5 from "../assets/team_small_5.webp";
import team_small_6 from "../assets/team_small_6.webp";
// Testimonial slider pic
import FeedbackSlider from "../Components/Slider";
const About = () => {
  return (
    <>
      <div
        className="w-full h-[420px] bg-cover bg-center flex items-center justify-center text-4xl font-bold text-white"
        style={{ backgroundImage: `url(${AboutBg})` }} // Setting the background image
      >
        <div className="lg:mt-28 lg:ml-16">
          <h1>
            About{" "}
            <span className="text-[#eb9834] font-bold text-4xl">
              {" "}
              the team{" "}
            </span>
          </h1>
        </div>
      </div>

      {/* new section */}
      <section>
        {/* Main div */}
        <div className="w-full flex lg:flex-row flex-col">
          {/* left side dev */}
          <div className="lg:w-1/2">
            <img src={Players} alt="" className="w-full h-auto" />
          </div>

          {/* Right side dev */}
          <div className="lg:w-1/2 p-2 pr-3 lg:pl-16 lg:pt-16">
            <h1 className="text-3xl font-bold uppercase">about the tigers</h1>
            <h3 className="uppercase mt-4 text-neutral-500">mission&vision</h3>
            <span className="text-sm text-neutral-500">
              Resoect for the game
            </span>
            <p className="mt-4 text-justify text-sm text-neutral-500 lg:pr-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan dolor id enim lacinia, sed feugiat ex suscipit. Nunc
              molestie malesuada pellentesque. Quisque mattis ante ut nisl
              tristique ornare. Aenean interdum dictum augue, quis egestas erat
              lacinia in. Proin dictum commodo nulla ut mattis. Pellentesque vel
              commodo nisi. Donec eget purus eget ex efficitur tristique. Nulla
              ut mollis justo.
            </p>
            <br />
            <p className=" text-justify text-sm text-neutral-500 lg:pr-20">
              Nam turpis nulla, ullamcorper volutpat faucibus ut, facilisis in
              elit. Nam blandit diam vel felis porta, vitae congue nulla
              feugiat. Vestibulum rhoncus odio elit, at aliquet sem posuere vel.
            </p>
            <button className="px-4 py-2 mt-6 font-bold text-white border-b-2 border-[#06088c] relative overflow-hidden group bg-[#eb9834]">
              <span className="relative z-10">See More Info</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-[#06088c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Another Section */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl uppercase font-bold pt-16 ">
            meet the tigers
          </h1>
          <span className="text-sm text-neutral-500">2018-2019 season</span>
          {/* Main div */}
          <div className="lg:flex lg:flex-row flex-col lg:items-center lg:justify-center mt-8 lg:space-x-2">
            {/* Left side div */}
            <div className="w-full lg:w-1/5 flex flex-col items-center p-4">
              <img src={team_large_1} alt="" className=" lg:w-full lg:h-auto" />
              <h1 className="text-lg lg:text-2xl mt-3 lg:mt-5 text-center">
                Michael Smith
              </h1>
              <span className="text-xs lg:text-sm text-[#eb9834] font-bold uppercase text-center mt-1">
                Head Coach
              </span>
              <p className="text-center px-2 lg:px-4 text-neutral-600 text-xs lg:text-sm mt-2 lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan dolor id enim lacinia, sed feugiat ex suscipit.
              </p>
              <div className="flex flex-col lg:flex-row w-full text-[9px] lg:text-[10px] items-center lg:items-start justify-center lg:justify-start lg:space-x-3 font-bold mt-4 px-2 lg:px-5 lg:flex-nowrap">
                <label className="text-center lg:text-left whitespace-nowrap">
                  Past Teams:
                </label>
                <div className="flex space-x-1 text-center lg:text-left">
                  <span className="hover:text-[#eb9834]">Panthers,</span>
                  <span className="hover:text-[#eb9834]">The Cougars</span>
                </div>
              </div>
            </div>

            {/* Center side div */}
            <div className="w-full lg:w-1/5 flex flex-col items-center p-4">
              <img src={team_large_2} alt="" className=" lg:w-full lg:h-auto" />
              <h1 className="text-lg lg:text-2xl mt-3 lg:mt-5 text-center">
              Chris Parker
              </h1>
              <span className="text-xs lg:text-sm text-[#eb9834] font-bold uppercase text-center mt-1">
              assistant coach
              </span>
              <p className="text-center px-2 lg:px-4 text-neutral-600 text-xs lg:text-sm mt-2 lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan dolor id enim lacinia, sed feugiat ex suscipit.
              </p>
              <div className="flex flex-col lg:flex-row w-full text-[9px] lg:text-[10px] items-center lg:items-start justify-center lg:justify-start lg:ml-12 lg:space-x-3 font-bold mt-4 px-2 lg:px-5 lg:flex-nowrap">
                <label className="text-center lg:text-left whitespace-nowrap">
                  Past Teams:
                </label>
                <div className="flex space-x-1 text-center lg:text-left">
                  <span className="hover:text-[#eb9834]">Panthers,</span>
                </div>
              </div>
            </div>
            {/* Right side div */}
            <div className="w-full lg:w-1/5 flex flex-col items-center p-4">
              <img src={team_large_3} alt="" className=" lg:w-full lg:h-auto" />
              <h1 className="text-lg lg:text-2xl mt-3 lg:mt-5 text-center">
              George Williams
              </h1>
              <span className="text-xs lg:text-sm text-[#eb9834] font-bold uppercase text-center mt-1">
              advance scout
              </span>
              <p className="text-center px-2 lg:px-4 text-neutral-600 text-xs lg:text-sm mt-2 lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan dolor id enim lacinia, sed feugiat ex suscipit.
              </p>
              <div className="flex flex-col lg:flex-row w-full text-[9px] lg:text-[10px] items-center lg:items-start justify-center lg:justify-start lg:ml-12 lg:space-x-3 font-bold mt-4 px-2 lg:px-5 lg:flex-nowrap">
                <label className="text-center lg:text-left whitespace-nowrap">
                  Past Teams:
                </label>
                <div className="flex space-x-1 text-center lg:text-left">
                  <span className="hover:text-[#eb9834]">Panthers,</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 lg:justify-center">
          <div className="lg:flex lg:flex-row flex-col lg:space-x-4 space-y-3">
            {/* Individual Card Components */}
            {[
              team_small_1,
              team_small_2,
              team_small_3,
              team_small_4,
              team_small_5,
              team_small_6,
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-col lg:items-center sm:items-start lg:justify-center text-left"
              >
                {/* pic-wala div */}
                <div className="flex sm:flex-row lg:flex-col items-center lg:items-center">
                  <div className="relative">
                    <img
                      src={imageSrc}
                      alt=""
                      className="h-36 w-36 hover:opacity-50"
                    />
                    <span className="absolute top-6 bg-[#131364] px-2 rounded-full left-0 transform -translate-y-1/2 -translate-x-1/2 text-white font-bold p-1 text-xl">
                      83
                    </span>
                  </div>

                  {/* text-wala div */}
                  <div className="flex flex-col lg:pl-0 pl-5 items-center sm:items-start sm:ml-4 mt-2 lg:mt-4 text-left">
                    <h2 className="font-bold hover:text-[#eb9834] text-center sm:text-left">
                      Person {index + 1}
                    </h2>
                    <span className="uppercase text-[#eb9834] text-[10px] font-bold">
                      Position
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <button className="px-4 py-2 mt-10 font-bold text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c]">
              <span className="relative z-10">See The Team</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-[#e1bc8e] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </button>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <FeedbackSlider />
      </div>

        {/* new section */}
        <section className="h-40 bg-[#eb9834] flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 h-full px-4">
    <h3 className="text-xl md:text-3xl font-bold text-center md:text-left">
      Would you like to join our{" "}
      <span className="text-[#2527ae]">football club?</span>
    </h3>
    <button className="px-6 py-3 md:p-4 font-bold text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c] text-sm md:text-base">
      <span className="relative z-10">See More Info</span>
      <span className="absolute left-0 bottom-0 w-full h-full bg-[#e1bc8e] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
    </button>
  </div>
</section>

    </>
  );
};

export default About;
