import React, { useState } from "react";
import ContactBg from "../assets/HomeBg.avif";
import newsimage from "../assets/newsimage.jpeg";
// SVG Icons 
import icon_6 from "../assets/icon_6.svg";
import icon_7 from "../assets/icon_7.svg";
import icon_8 from "../assets/icon_8.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Background Section */}
      <div
        className="w-full h-[420px] bg-cover bg-center flex items-center justify-center text-4xl font-bold text-white"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="lg:mt-28 lg:ml-16">
          <h1>
            <span className="text-[#eb9834] font-bold text-4xl"> Contact </span>
            Us{" "}
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <section>
        <div className="flex items-center justify-center w-full py-12">
          <div className="lg:flex lg:flex-row flex-col items-center justify-center lg:max-w-[1000px] w-full space-y-6 lg:space-y-0 lg:space-x-6 px-4">
            {/* Left div - Form */}
            <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
              <h1 className="text-2xl font-semibold uppercase text-center lg:text-left">Get in touch with us</h1>
              <p className="text-justify mt-3 pr-5 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan dolor id enim lacinia, sed feugiat ex suscipit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-slate-200 rounded-md focus:outline-none sm:text-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full p-3 bg-slate-200 rounded-md focus:outline-none sm:text-sm"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full p-3 rounded-md focus:outline-none bg-slate-200 sm:text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 bg-slate-200 rounded-md focus:outline-none sm:text-sm"
                />
                <div className="flex">
                  <button className="px-3 py-2 font-semibold text-[15px] text-white border-b-2 border-[#06088c] relative overflow-hidden group bg-[#eb9834]">
                    <span className="relative z-10">See More Info</span>
                    <span className="absolute left-0 bottom-0 w-full h-full bg-[#06088c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right div - Image */}
            <div className="lg:w-1/2 w-full">
              <img
                src={newsimage}
                alt="News"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="pt-10 pb-16">
        <div className="flex flex-col lg:flex-row lg:w-[1000px] lg:mx-auto space-y-6 lg:space-y-0 lg:space-x-10 items-center justify-center px-4">
          {[icon_6, icon_7, icon_8].map((icon, index) => (
            <div key={index} className="w-full lg:w-48 flex flex-col items-center space-y-4">
              <div className="flex flex-col w-20 h-24 items-center py-4 bg-[#06088c]">
                <img src={icon} alt="" className="w-10" />
                <span className="text-sm uppercase font-bold text-white pt-2">Stadium</span>
              </div>
              <div className="flex flex-col items-start w-full space-y-2">
                <div className="flex justify-between space-x-4 w-full">
                  <label className="text-sm  font-bold">Address</label>
                  <p className="text-neutral-500 text-[14px] text-left">245 Principe Lane Avila Beach, USA</p>
                </div>
                <div className="flex justify-between w-full">
                  <label className="text-sm font-bold">Phone</label>
                  <p className="text-neutral-500 text-[14px] text-left">+36 345 7953 4994</p>
                </div>
                <div className="flex justify-between w-full">
                  <label className="text-sm font-bold">E-mail</label>
                  <p className="text-neutral-500 text-[14px] text-left">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
