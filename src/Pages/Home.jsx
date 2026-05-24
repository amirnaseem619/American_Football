import React from "react";
import CountUp from "react-countup";
import RedHelmet from "../assets/RedHelmet.webp";
import BlueHelmet from "../assets/BlueHelmet.webp";
import upcoming_1 from "../assets/upcoming_1.webp";
import upcoming_2 from "../assets/upcoming_2.webp";
import upcoming_3 from "../assets/upcoming_3.webp";
import upcoming_4 from "../assets/upcoming_4.webp";
import logo_1 from "../assets/logo_1.webp";
import logo_2 from "../assets/logo_2.webp";
import logo_3 from "../assets/logo_3.webp";
import logo_4 from "../assets/logo_4.webp";
// Milestones pic
import Milestones from "../assets/milestones.webp";
// Icons Svg
import icon_1 from "../assets/icon_1.svg";
import icon_2 from "../assets/icon_2.svg";
import icon_3 from "../assets/icon_3.svg";
import icon_4 from "../assets/icon_4.svg";
// Playes Images
import player_1 from "../assets/player_1.webp";
import player_2 from "../assets/player_2.webp";
// News Pics
import news_1 from "../assets/news_1.webp";
import news_2 from "../assets/news_2.webp";
import news_3 from "../assets/news_3.webp";
import HomeSlider from "../Components/HomeSlider";

const Home = () => {
  

  // News Data
  const newsData = [
    {
      image: news_1, // replace with your image URLs
      date: "10",
      month: "SEPT",
      title: "T-shirt release date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
    {
      image: news_2, // replace with your image URLs
      date: "10",
      month: "SEPT",
      title: "Junior league Openings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
    {
      image: news_3, // replace with your image URLs
      date: "10",
      month: "SEPT",
      title: "The summer transfers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
  ];
  return (
    <>
    <div>
      <HomeSlider/>
    </div>
      <div className="h-14 flex w-full overflow-hidden">
        {/* Breaking News Section */}
        <div className="bg-[#eb9834] w-1/3 text-white lg:text-3xl font-bold h-full flex items-center justify-end lg:pr-10 text-sm pr-2 animate-slide-down">
          Breaking News
        </div>

        {/* Scrolling News Text */}
        <div className="bg-[#06088c] w-2/3 h-full flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
            <span className="mx-10">|</span>
            Donec vel nunc sit amet libero tristique posuere. Lorem ipsum dolor
            sit amet.
          </div>
        </div>
      </div>

     {/* New Section */}
<div className="flex flex-col  items-center justify-center pt-8 sm:pt-16">
  <div className="text-center px-4">
    <h1 className="text-3xl font-bold sm:text-4xl">LATEST NEWS</h1>
    <h3 className="text-lg sm:text-2xl text-neutral-600 mt-2 sm:mt-4">GREAT WIN IN FINALS</h3>
    <p className="text-xs sm:text-sm text-neutral-600">Mon 25 Sept, Champions League</p>
  </div>

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mt-5 sm:mt-6 w-full space-y-4 lg:space-y-0 lg:space-x-4">
    {/* First div */}
    <div className="flex flex-col items-center text-center lg:w-1/2 px-4 space-y-2">
      <div className="flex items-center space-x-3 sm:space-x-6">
        <img src={RedHelmet} alt="Pic" className="w-20 h-20 sm:w-28 sm:h-28" />
        <div>
          <span className="text-3xl sm:text-4xl font-bold">2</span>
          <h2 className="text-lg sm:text-xl text-neutral-500 font-bold mt-1">Bulls Club</h2>
        </div>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    {/* Divider Line (only on lg screens) */}
    <div className="hidden lg:block border-l-2 border-gray-300 h-32"></div>

    {/* Second div */}
    <div className="flex flex-col items-center text-center lg:w-1/2 px-4 space-y-2">
      <div className="flex items-center space-x-3 sm:space-x-6">
        <div>
          <span className="text-3xl sm:text-4xl font-bold">2</span>
          <h2 className="text-lg sm:text-xl text-neutral-500 font-bold mt-1">Bulls Club</h2>
        </div>
        <img src={BlueHelmet} alt="Pic" className="w-20 h-20 sm:w-28 sm:h-28" />
      </div>
      <p className="text-gray-600 text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

  <button className="mt-8 sm:mt-10 p-2 sm:p-3 font-bold text-white border-b-2 border-[#06088c] bg-[#eb9834] text-sm sm:text-base relative overflow-hidden group">
    <span className="relative z-10">See More Info</span>
    <span className="absolute left-0 bottom-0 w-full h-full bg-[#06088c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
  </button>
</div>


      {/* Another Section */}
      <section className="py-16 mt-16 bg-[#06088c]">
        <div className="lg:flex lg:flex-row justify-center lg:-space-x-16 flex-col items-center">
          {/* LeftSide Div */}
          <div className="w-full lg:w-5/12 flex items-center mt-16 flex-col">
            <div className="w-3/4 lg:w-5/6">
              <h1 className="uppercase text-3xl font-bold text-white">
                upcoming events
              </h1>
              <p className="text-sm text-[#eb9834] mt-2">
                What&apos;s next this month
              </p>
            </div>

            {/* Event Divs */}
            <div className="mt-12 w-3/4 lg:w-5/6 space-y-4">
              {/* First Event */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img
                  src={upcoming_1}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    New T-shirts launch
                  </span>
                  <span className="text-[13px] text-[#eb9834]">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <button className="p-2 font-bold text-sm text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c]">
                  <span className="relative z-10">See More</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#eb9834] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
              </div>

              {/* Second Event */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img
                  src={upcoming_2}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    Team presentation
                  </span>
                  <span className="text-[13px] text-[#eb9834]">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <button className="p-2 font-bold text-sm text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c]">
                  <span className="relative z-10">See More</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#eb9834] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
              </div>

              {/* Third Event */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img
                  src={upcoming_3}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    Press Conference
                  </span>
                  <span className="text-[13px] text-[#eb9834]">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <button className="p-2 font-bold text-sm text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c]">
                  <span className="relative z-10">See More</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#eb9834] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
              </div>

              {/* Fourth Event */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img
                  src={upcoming_4}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg text-white font-bold">
                    New T-shirts launch
                  </span>
                  <span className="text-[13px] text-[#eb9834]">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <button className="p-2 font-bold text-sm text-white border-b-2 border-[#eb9834] relative overflow-hidden group bg-[#06088c]">
                  <span className="relative z-10">See More</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#eb9834] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                </button>
              </div>
            </div>
          </div>

          {/* RightSide Div */}
          <div className="w-full lg:w-5/12 flex items-center mt-16 flex-col">
            <div className="w-3/4 lg:w-5/6">
              <h1 className="uppercase text-3xl text-white font-bold">
                latest games
              </h1>
              <p className="text-sm text-[#eb9834] mt-2">Results</p>
            </div>

            {/* Game Divs */}
            <div className="mt-12 w-3/4 lg:w-5/6 space-y-4">
              {/* First Game */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img src={logo_1} alt="" className="w-10 h-10 rounded-full" />
                <h3 className="text-white font-bold text-sm">The Alligators</h3>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] text-white font-bold">
                    Football League
                  </span>
                  <span className="text-[13px] text-[#eb9834]">8 : 3</span>
                  <span className="text-[13px] text-neutral-400">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm">The Tigers</h3>
                <img src={logo_2} alt="" className="w-10 h-10 rounded-full" />
              </div>

              {/* Second Game */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img src={logo_2} alt="" className="w-10 h-10 rounded-full" />
                <h3 className="text-white font-bold text-sm">The Alligators</h3>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] text-white font-bold">
                    Football League
                  </span>
                  <span className="text-[13px] text-[#eb9834]">8 : 3</span>
                  <span className="text-[13px] text-neutral-400">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm">Denver Pumas</h3>
                <img src={logo_3} alt="" className="w-10 h-10 rounded-full" />
              </div>

              {/* Third Game */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img src={logo_3} alt="" className="w-10 h-10 rounded-full" />
                <h3 className="text-white font-bold text-sm">Denver Puma</h3>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] text-white font-bold">
                    Football League
                  </span>
                  <span className="text-[13px] text-[#eb9834]">8 : 3</span>
                  <span className="text-[13px] text-neutral-400">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm">The Tigers</h3>
                <img src={logo_2} alt="" className="w-10 h-10 rounded-full" />
              </div>

              {/* Fourth Game */}
              <div className="flex items-center justify-between p-2 bg-[#2527ae]">
                <img src={logo_4} alt="" className="w-10 h-10 rounded-full" />
                <h3 className="text-white font-bold text-sm">The Eagles</h3>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] text-white font-bold">
                    Football League
                  </span>
                  <span className="text-[13px] text-[#eb9834]">8 : 3</span>
                  <span className="text-[13px] text-neutral-400">
                    August 25, 2018 / 17 UTC
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm">The Tigers</h3>
                <img src={logo_2} alt="" className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section>
        <div
          className="lg:h-40 w-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${Milestones})` }}
        >
          <div className="flex lg:flex-row flex-col justify-center lg:space-x-8">
            {/* First milestone */}
            <div className="flex space-x-3 items-center">
              <img src={icon_1} alt="" className="h-16 w-auto" />
              <div className="flex flex-col items-center">
                <span className="text-[#eb9834] font-bold text-4xl">
                  <CountUp start={1} end={23} duration={3} separator="," />K
                </span>
                <span className="text-white font-bold text-xl mt-1">
                  Team players
                </span>
                <span className="text-white font-bold text-[8px] mt-1">
                  Lorem ipsum dolor sit amet,
                </span>
              </div>
            </div>

            {/* Second milestone */}
            <div className="flex space-x-3 items-center">
              <img src={icon_2} alt="" className="h-16 w-auto" />
              <div className="flex flex-col items-center">
                <span className="text-[#eb9834] font-bold text-4xl">
                  <CountUp start={1} end={120} duration={3} />
                </span>
                <span className="text-white font-bold text-xl mt-1">
                  Trophies
                </span>
                <span className="text-white font-bold text-[8px] mt-1">
                  Lorem ipsum dolor sit amet,
                </span>
              </div>
            </div>

            {/* Third milestone */}
            <div className="flex space-x-3 items-center">
              <img src={icon_3} alt="" className="h-16 w-auto" />
              <div className="flex flex-col items-center">
                <span className="text-[#eb9834] font-bold text-4xl">
                  <CountUp start={1} end={7} duration={3} />
                </span>
                <span className="text-white font-bold text-xl mt-1">
                  Medals
                </span>
                <span className="text-white font-bold text-[8px] mt-1">
                  Lorem ipsum dolor sit amet,
                </span>
              </div>
            </div>

            {/* Fourth milestone */}
            <div className="flex space-x-3 items-center">
              <img src={icon_4} alt="" className="h-16 w-auto" />
              <div className="flex flex-col items-center">
                <span className="text-[#eb9834] font-bold text-4xl">
                  <CountUp start={1} end={36} duration={3} />
                </span>
                <span className="text-white font-bold text-xl mt-1">
                  Kicks/Match
                </span>
                <span className="text-white font-bold text-[8px] mt-1">
                  Lorem ipsum dolor sit amet,
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player of the Month Section */}
      <section className="my-20">
        {/* Main div */}
        <div className="lg:flex lg:flex-row flex-col w-full items-center justify-center mt-16">
          {/* Left side div */}
          <div className="flex lg:w-1/3  justify-end flex-col">
            <div className="flex flex-col">
              <h1 className="text-2xl p-2 uppercase font-bold">
                player of the month
              </h1>
              <p className="text-sm p-2 text-[#eb9834] mt-1">
                What&apos;s next this month
              </p>
            </div>
            <div className=" flex flex-col justify-center mt-10">
              <div className="flex p-2 items-center space-x-4">
                <span className="bg-[#2527ae] text-white text-3xl font-bold p-2">
                  83
                </span>
                <h2 className="text-3xl">Michael Smith</h2>
              </div>

              <p className="text-sm text-justify p-2  mt-8 text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan dolor id enim lacinia, sed feugiat ex suscipit. Nunc
                molestie malesuada pellentesque. Quisque mattis ante ut nisl
                tristique ornare. Aenean interdum dictum augue, quis egestas
                erat lacinia in. Proin dictum commodo nulla ut mattis.
                Pellentesque vel commodo nisi. Donec eget purus eget ex
                efficitur tristique. Nulla ut mollis justo.
              </p>
              <br />
              <p className="text-sm text-justify p-2 text-neutral-700">
                Nam turpis nulla, ullamcorper volutpat faucibus ut, facilisis in
                elit. Nam blandit diam vel felis porta, vitae congue nulla
                feugiat. Vestibulum rhoncus odio elit, at aliquet sem posuere
                vel.
              </p>
            </div>
          </div>

          {/* Right side Div */}
          <div className="flex lg:w-1/2 lg:-mr-16 mt-3 ">
            <div className="">
              <img src={player_1} alt="" />
            </div>
            <div className="">
              <img src={player_2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#E7E9F1] py-24">
        <div className="lg:p-8 p-2">
          {/* Header Section */}
          <div className="max-w-screen-lg mx-auto lg:ml-48">
            <h2 className="text-2xl font-bold text-gray-800">LATEST NEWS</h2>
            <p className="text-sm text-[#eb9834]">What’s next this month</p>
          </div>

          {/* Cards Section */}
          <div className="lg:flex justify-center mt-8 lg:space-x-4">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden lg:max-w-72"
              >
                {/* Image Container with Date Overlay */}
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-white w-12 h-12 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#eb9834]">
                      {news.date}
                    </span>
                    <span className="text-xs">{news.month}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-orange-500 text-sm font-semibold">
                    News
                  </span>
                  {/* Title */}
                  <h3 className="text-lg font-semibold mt-2 mb-2">
                    {news.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-500 text-sm">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Home;
