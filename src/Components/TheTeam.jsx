import React from 'react'
import NewsBg from '../assets/HomeBg.avif';
import TeamSchedule from '../Components/TeamSchedule';
import upcoming_1 from "../assets/upcoming_1.webp";
import upcoming_2 from "../assets/upcoming_2.webp";
import upcoming_3 from "../assets/upcoming_3.webp";
import upcoming_4 from "../assets/upcoming_4.webp";
import logo_1 from "../assets/logo_1.webp";
import logo_2 from "../assets/logo_2.webp";
import logo_3 from "../assets/logo_3.webp";
import logo_4 from "../assets/logo_4.webp";
import Players from "../assets/Players.jpeg";
const TheTeam = () => {
  return (
    <>
    <div
    className="w-full h-[420px] bg-cover bg-center flex items-center justify-center text-4xl font-bold text-white"
    style={{ backgroundImage: `url(${NewsBg})` }}
  >
    <div className="lg:mt-28 lg:ml-16">
      <h1>
        The{" "}
        <span className="text-[#eb9834] font-bold text-4xl"> Games </span>
      </h1>
    </div>
  </div>

{/* schedule  */}
<div>
    <TeamSchedule/>
</div>

{/* Another Section */}
<section className="py-16  bg-[#06088c]">
        <div className="lg:flex lg:flex-row justify-center lg:-space-x-16 flex-col items-center">
          {/* LeftSide Div */}
          <div className="w-full lg:w-5/12 flex items-center mt-16 flex-col">
            <div className="w-3/4 lg:w-5/6">
              <h1 className="uppercase text-3xl font-bold text-white">
                upcoming events
              </h1>
              <p className="text-sm text-[#eb9834] mt-2">
                What's next this month
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

      <section className="flex justify-center items-center my-6 lg:py-10">
  {/* Main container */}
  <div className="w-full max-w-[1000px] flex items-center justify-center lg:flex-row flex-col mx-auto">
    
    {/* Left side - Image */}
    <div className="lg:w-1/2">
      <img src={Players} alt="Players" className="w-full h-auto" />
    </div>

    {/* Right side - Text and Button */}
    <div className="lg:w-1/2 px-2 pr-3 lg:pl-16 text-center lg:text-left">
      <h1 className="text-3xl font-bold uppercase">About the Tigers</h1>
      <h3 className="uppercase mt-4 text-neutral-500">Mission & Vision</h3>
      <span className="text-sm text-neutral-500">Respect for the game</span>
      <p className="mt-4 text-justify text-sm text-neutral-500 lg:pr-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        accumsan dolor id enim lacinia, sed feugiat ex suscipit. Nunc
        molestie malesuada pellentesque. Quisque mattis ante ut nisl
        tristique ornare. Aenean interdum dictum augue, quis egestas erat
        lacinia in. Proin dictum commodo nulla ut mattis. Pellentesque vel
        commodo nisi. Donec eget purus eget ex efficitur tristique. Nulla
        ut mollis justo.
      </p>
      
      {/* Button with hover effect */}
      <button className="px-4 py-2 mt-6 font-bold text-white border-b-2 border-[#06088c] relative overflow-hidden group bg-[#eb9834]">
        <span className="relative z-10">See More Info</span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-[#06088c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
      </button>
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
  )
}

export default TheTeam