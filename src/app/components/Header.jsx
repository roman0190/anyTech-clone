"use client";
import Image from "next/image";
import { useState, useEffect,useRef } from "react";
import { useSidebar } from "../context/SideBarContext";
const Header = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isOpenLag, setIsOpenLag] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpenLag(false);
  };
  // Close dropdown on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenLag(false);
      }
    };

    const handleScroll = () => {
      setIsOpenLag(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is scrolling down or up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      // Set background condition: if scrolled down, apply bg-blue-400
      setIsScrolled(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <section
      className={`z-50 font-bold fixed top-0 w-full text-white shadow-lg transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full "
      } ${
        isScrolled
          ? "bg-blue-500 shadow-md"
          : "lg:bg-transparent bg-blue-500 lg:shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center flex-wrap justify-between py-4 lg:px-[5rem] px-[10%] lg:h-auto h-[5rem]">
        <h1>
          <a href="/">
            <Image
              src="/assets/icons/Logo.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[134px] h-auto object-contain lg:w-[170px]"
            />
          </a>
        </h1>
        <div className="flex items-center">
          <nav className="desktop-menu max-lg:hidden">
            <ul className="flex items-center font-semibold">
              <li className="relative flex items-center hover:cursor-pointer group">
                Solutions
                <svg
                  className="relative ml-2 mt-1 fill-white"
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path>
                </svg>
                {/* Dropdown Menu */}
                <ul className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black font-thin p-3 w-[230px] flex flex-col gap-3 rounded-sm transition-all duration-300 ease-in-out shadow-lg">
                  <li className="hover:cursor-pointer hover:text-blue-500">
                    AnyCaaS
                  </li>
                  <li className="hover:cursor-pointer hover:text-blue-500">
                    AnyBaaS
                  </li>
                  <li className="hover:cursor-pointer hover:text-blue-500">
                    AnyPaaS
                  </li>
                </ul>
              </li>

              <li className="relative cursor-pointer px-5 py-2 flex flex-col items-center justify-center border-b border-transparent transition-all duration-500 ease-in-out hover:border-white ml-5">
                Services
              </li>
              <li className="relative cursor-pointer px-5 py-2 flex flex-col items-center justify-center border-b border-transparent transition-all duration-500 ease-in-out hover:border-white mr-5">
                About Us
              </li>
              <li className="relative font-normal">
                <button
                  onClick={() => setIsOpenLag(!isOpenLag)}
                  className="flex items-center gap-2 p-2 border rounded-full  transition"
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="font-bold">{selectedLanguage}</span>
                  <svg
                    className={`mt-1 fill-white transition-transform ${
                      isOpenLag ? "rotate-180" : "rotate-0"
                    }`}
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path>
                  </svg>
                </button>
                {isOpenLag && (
                  <ul className="absolute mt-2 w-[300px] bg-white text-black shadow-lg rounded-md p-2 transition-opacity duration-300 ease-in-out">
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer border-b"
                      onClick={() => handleLanguageChange("EN")}
                    >
                      EN (English)
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer border-b"
                      onClick={() => handleLanguageChange("TH")}
                    >
                      TH (Thai)
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer border-b"
                      onClick={() => handleLanguageChange("ID")}
                    >
                      ID (Bahasa Indonesia)
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("TW")}
                    >
                      TW (Traditional Chinese)
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
          {/* Mobile Navigation Icon */}
          <nav className="mobile-nav lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  className="fill-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="fill-white"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2H21M3 10H21M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
        <a
          href=""
          className="border border-white text-lg rounded-sm bg-transparent hover:bg-white hover:text-blue-600 hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs"
        >
          Contact Us
          <svg
            className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-600"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Header;
