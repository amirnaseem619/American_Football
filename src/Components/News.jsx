import React from 'react';
import NewsBg from '../assets/HomeBg.avif';
import logo from "../assets/Logo.webp";
// News Pics
import news_1 from "../assets/news_1.webp";
import news_2 from "../assets/news_2.webp";
import news_3 from "../assets/news_3.webp";
// Logos
import logo_1 from "../assets/logo_1.webp";
import logo_2 from "../assets/logo_2.webp";
import logo_3 from "../assets/logo_3.webp";
import logo_4 from "../assets/logo_4.webp";
// small divs
import players from "../assets/players.jpeg";

const News = () => {
  // News Data
  const newsData = [
    {
      image: news_1,
      date: "10",
      month: "SEPT",
      title: "T-shirt release date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
    {
      image: news_2,
      date: "10",
      month: "SEPT",
      title: "Junior league Openings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
    {
      image: news_3,
      date: "10",
      month: "SEPT",
      title: "The summer transfers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.",
    },
  ];

  return (
    <>
      {/* Background Section */}
      <div
        className="w-full h-[420px] bg-cover bg-center flex items-center justify-center text-4xl font-bold text-white"
        style={{ backgroundImage: `url(${NewsBg})` }}
      >
        <div className="lg:mt-28 lg:ml-16">
          <h1>
            The{" "}
            <span className="text-[#eb9834] font-bold text-4xl"> News </span>
          </h1>
        </div>
      </div>

      {/* News Section */}
      <section className="bg-[#E7E9F1] py-24">
        <div className="lg:flex lg:flex-row flex-col justify-center px-2 space-y-8 lg:space-y-0 lg:-space-x-96">
          {/* Cards Section (Center aligned) */}
          <div className="lg:w-2/3 w-full">
            <div className="lg:px-8 p-2">
              <div className="lg:flex lg:flex-col justify-center gap-8">
                {newsData.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md hover:shadow-3xl transition-shadow duration-300 ease-in-out overflow-hidden lg:max-w-md w-full"
                  >
                    {/* Image Container with Date Overlay */}
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-white w-12 h-12 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-[#eb9834]">
                          {news.date}
                        </span>
                        <span className="text-xs">{news.month}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-4 my-5">
                      <span className="text-orange-500 text-sm font-semibold">
                        News
                      </span>
                      <h3 className="text-lg font-semibold mt-2 mb-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{news.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Section */}
          <div className="lg:w-64 w-full">
            {/* RightSide Div */}
            <div className="w-full lg:w-5/12 flex items-center flex-col">
              <div>
                <h1 className="uppercase text-xs text-black font-bold">
                  Latest games
                </h1>
                <p className="text-xl text-[#fba53c] mt-2">Results</p>
              </div>

              {/* Game Divs */}
              <div className="lg:w-5/6 mt-4 space-y-4">
                {[logo_1, logo_2, logo_3, logo_4].map((logo, index) => (
                  <div key={index} className="w-56 flex flex-col bg-[#2527ae]">
                    <span className="text-xl font-bold text-center text-white">
                      8 : 3
                    </span>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <img src={logo} alt="" className="w-8 h-8 rounded-full" />
                        <h3 className="text-white font-bold text-[10px]">The Alligators</h3>
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-white font-bold text-xs">The Tigers</h3>
                        <img src={logo} alt="" className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                    <span className="text-[10px] text-center text-neutral-400">
                      August 25, 2018 / 17 UTC
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories content */}
            <div className='flex flex-col items-center lg:items-start lg:justify-start'>
              <h1 className="uppercase  mt-8 text-xs text-black font-bold">
                Categories
              </h1>
              <p className="text-xl flex flex-col items-center text-[#eb9834]">Results</p>

              {/* Links Section */}
              <div className="mt-4 flex flex-col lg:items-start items-center space-y-2">
                <span><a href="#" className="text-sm text-blue-500 hover:text-[#eb9834]">Games</a></span>
                <span><a href="#" className="text-sm text-blue-500 hover:text-[#eb9834]">About the team</a></span>
                <span><a href="#" className="text-sm text-blue-500 hover:text-[#eb9834]">Press Release</a></span>
                <span><a href="#" className="text-sm text-blue-500 hover:text-[#eb9834]">Football</a></span>
                <span><a href="#" className="text-sm text-blue-500 hover:text-[#eb9834]">Uncategorized</a></span>
              </div>
            </div>

            {/* Latest posts */}
            <div className="mt-6 flex flex-col lg:items-start items-center">
              <h1 className="uppercase mt-8 text-xs text-black font-bold">
                Latest posts
              </h1>
              <p className="text-xl text-[#eb9834]">Results</p>

              {[players, players, players].map((player, index) => (
                <a key={index} href="">
                  <div className="mt-2 flex items-center space-x-3">
                    <img src={player} alt="" className="w-16 h-14" />
                    <div className="flex flex-col">
                      <span className="text-[#eb9834] text-[9px] font-bold">Sept 10</span>
                      <span className="text-[14px] text-neutral-600 hover:text-[#eb9834]">3 New transfers for this summer</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Buy Tickets Section */}
            <div
  className="w-72 mx-auto lg:mx-0 lg:w-56 h-[420px] mt-8 bg-cover bg-center flex items-center justify-center text-4xl font-bold text-white relative"
  style={{ backgroundImage: `url(${NewsBg})` }}
>
  {/* Black Overlay with Reduced Opacity */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10 text-center px-6 py-8 space-y-14 border border-[#eb9834] border-t-5 border-l-5 border-r-5 flex flex-col items-center justify-center">
    {/* Heading and Subheading */}
    <div>
      <h1 className="uppercase text-xl text-[red] font-bold md:text-xl">
        Buy Tickets
      </h1>
      <p className="text-xs text-[#eb9834] md:text-sm">
        See The Tigers Play
      </p>
    </div>

    {/* Logo */}
    <div>
      <img src={logo} alt="Logo" className="w-28 mx-auto" />
    </div>

    {/* Button */}
    <div>
      <button className="px-3 py-1 font-semibold text-[10px] text-white border-b-2 border-[#06088c] relative overflow-hidden group bg-[#eb9834]">
        <span className="relative z-10">See More Info</span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-[#06088c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
      </button>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default News;
