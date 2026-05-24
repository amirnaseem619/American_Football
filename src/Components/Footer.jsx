import React from "react";
import footer from "../assets/footer.webp";
import footerLogo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-[#0B1738] text-white py-12 flex-grow">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row lg:items-center pl-2 justify-between space-y-8 md:space-y-0">
          {/* Logo and Player Image */}
          <div className="lg:flex lg:items-center space-x-4">
            <img src={footer} alt="Team Logo" className="w-80 h-80" />
          </div>

          {/* Contact Info */}
          <div className="text-left space-y-4">
            <img
              src={footerLogo}
              alt="Player"
              className="w-24 h-24 object-cover"
            />
            <div className="flex space-x-4">
              <h3 className="text-sm text-[#eb9834] font-semibold">Address</h3>
              <div className="flex flex-col">
                <p>245 Principe Lane</p>
                <p>Avila Beach, USA</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <h3 className="text-sm text-[#eb9834] font-semibold">Phone</h3>
              <p className="text-[14px]">+36 345 7953 4994</p>
            </div>
            <div className="flex space-x-4">
              <h3 className="text-sm text-[#eb9834] font-semibold">E-mail</h3>
              <p className="text-[14px]">yourmail@gmail.com</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-left p-2">
            <h3 className="text-lg font-semibold text-orange-500">
              Subscribe to newsletter
            </h3>
            <form className="flex items-center mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-[#14213D] text-white rounded-l-md outline-none"
              />
              <button className="px-4 py-2 bg-orange-500 rounded-r-md">
                Submit
              </button>
            </form>
            <p className="text-sm text-neutral-500-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Section */}
      <div className="bg-[#09122B] p-4">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between text-sm text-gray-400">
          <p className="text-center lg:text-left mt-4 lg:mt-0">
            © 2024 All rights reserved |
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0 lg:justify-end lg:order-2">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>
            <a href="/TheTeam" className="hover:text-orange-500">
              The Team
            </a>
            <a href="/" className="hover:text-orange-500">
              Tickets
            </a>
            <a href="/" className="hover:text-orange-500">
              News
            </a>
            <a href="/" className="hover:text-orange-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
