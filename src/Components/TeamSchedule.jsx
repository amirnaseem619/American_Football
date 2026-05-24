import React from 'react';
import icon_5 from '../assets/icon_5.svg';

const ScheduleCard = ({ team, days, bgColor }) => (
  <div className={`flex flex-col border rounded-lg overflow-hidden w-full sm:w-1/3 ${bgColor} mx-2 mb-4 sm:mb-0`}>
    <div className="bg-blue-900 text-white text-center py-3 font-bold flex justify-center items-center">
      <h3>{team}</h3>
      
      {/* SVG Icon between team and field text - Displays for all cards */}
      <img src={icon_5} alt="Icon" className="mx-2 w-6 h-6" />
      
      <h3 className="ml-4">MAIN FIELD</h3>
    </div>
    <div className="text-center flex-1 flex flex-col justify-center items-center">
      {days.map((day, index) => (
        <div
          key={index}
          className="flex justify-between px-6 py-2 border-b border-gray-200 text-gray-700 w-full"
        >
          <span>{day.name}</span>
          <span>{day.time}</span>
        </div>
      ))}
    </div>
  </div>
);

const TeamSchedule = () => {
  const days = [
    { name: 'MONDAY', time: '06PM - 08PM' },
    { name: 'TUESDAY', time: '06PM - 08PM' },
    { name: 'WEDNESDAY', time: '06PM - 08PM' },
    { name: 'THURSDAY', time: '06PM - 08PM' },
    { name: 'FRIDAY', time: '06PM - 08PM' },
    { name: 'SATURDAY', time: '06PM - 08PM' },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row w-full max-w-3xl items-center justify-center my-10">
        <ScheduleCard team="Senior TEAM" days={days} bgColor="bg-gray-200" />
        <ScheduleCard team="Junior TEAM" days={days} bgColor="bg-orange-400" />
        <ScheduleCard team="Youth TEAM" days={days} bgColor="bg-gray-200" />
      </div>
    </div>
  );
};

export default TeamSchedule;
