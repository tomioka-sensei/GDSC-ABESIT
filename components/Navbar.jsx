import React, { useState } from "react";
import Image from "next/image";
import LOGO from "@/assets/GDSC-ABES-LOGO.png";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variants: ["400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 bg-opacity-90 bg-white backdrop-blur-sm shadow-md text-black ${montserrat.className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-1">
          <Link href="/">
            <div className="flex items-center">
              <Image src={LOGO} alt="logo" width={130} />
            </div>
          </Link>

          <div className="md:hidden">
            <button
              className={`mobile-menu-button transform transition-transform hover:scale-105 focus:outline-none`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <ul className={`md:flex md:items-center md:gap-8 text-base font-medium md:ml-4 hidden`}>
            <li className={`button hover:scale-105`} onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <Link href="/">Home</Link>
            </li>
            <li className={`button hover:scale-105`} onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <Link href="/">Event</Link>
            </li>
            <li className={`button hover:scale-105`} onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <Link href="/">Project</Link>
            </li>
            <li className={`button hover:scale-105`} onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <Link href="/team">Team</Link>
            </li>
            <li className={`button hover:scale-105`} onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <Link href="/Contributors">Contributors</Link>
            </li>
          </ul>

          <ul
            className={`${
              isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } absolute top-full left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
          >
            <li className=" border-y-2 pl-10 py-2"><Link href="/">Home</Link></li>
            <li className=" border-b-2 pl-10 py-2"><Link href="/">Event</Link></li>
            <li className=" border-b-2 pl-10 py-2"><Link href="/">Project</Link></li>
            <li className=" border-b-2 pl-10 py-2"><Link href="/team">Team</Link></li>
            <li className=" border-b-2 pl-10 py-2"><Link href="/Contributors">Contributors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
