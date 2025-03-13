import { useState } from "react";
import Logo from "../assets/icons/logo.png";
import SearchIcon from "../assets/icons/search.png";
import NavProfile from "../assets/images/nav-profile.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 lg:pl-4 lg:px-12">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="Company Logo" className="h-8 lg:size-full" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden gap-2 xl:gap-6 lg:flex space-x-4 text-sm xl:text-base">
            <a
              href="#find-jobs"
              className="text-primary hover:text-color-base font-bold"
            >
              Find Jobs
            </a>
            <a href="#top-companies" className="text-light hover:text-primary">
              Top Companies
            </a>
            <a href="#job-tracker" className="text-light hover:text-primary">
              Job Tracker
            </a>
            <a href="#my-calander" className="text-light hover:text-primary">
              My Calander
            </a>
            <a href="#documents" className="text-light hover:text-primary">
              Documents
            </a>
            <a href="#messages" className="text-light hover:text-primary">
              Messages
            </a>
            <a href="#notifications" className="text-light hover:text-primary">
              Notifications
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden lg:flex bg-bg-blue rounded-md py-2 px-4 gap-2 w-full xl:max-w-[13rem] lg:max-w-[8rem]">
            {/* Search Icon/Button */}
            <button className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <img src={SearchIcon} alt="Search" className="w-full h-full" />
            </button>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="flex-grow placeholder:text-light placeholder:text-sm bg-transparent outline-none"
            />
          </div>

          {/* Find Resume Button */}

          <button className="hidden lg:block py-2 px-5 rounded-sm bg-primary text-white">
            Resume Builder
          </button>

          <img
            src={NavProfile}
            alt="Profile"
            className="rounded-full size-10 object-cover"
          />
          {/* Hamburger Icon for Mobile */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#333333"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex flex-col gap-4 pt-4`}
      >
        {/* Search Bar */}
        <div className="flex bg-bg-blue rounded-md py-2 px-6 gap-2">
          <button className="w-4">
            <img src={SearchIcon} alt="Search" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-light placeholder:text-sm w-40"
          />
        </div>
        {/* Find Resume Button */}
        <button className="py-2 px-5 rounded-sm bg-primary text-white">
          Resume Builder
        </button>
      </div>
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        role="menu"
        aria-label="Main menu"
      >
        <a
          href="#find-jobs"
          className="block text-primary py-2 px-4 hover:text-white hover:bg-primary font-bold"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Find Jobs
        </a>
        <a
          href="#top-companies"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Top Companies
        </a>
        <a
          href="#job-tracker"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Job Tracker
        </a>
        <a
          href="#my-calander"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          My Calander
        </a>
        <a
          href="#documents"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Documents
        </a>
        <a
          href="#messages"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Messages
        </a>
        <a
          href="#notifications"
          className="block text-light py-2 px-4 hover:text-white hover:bg-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Notifications
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
