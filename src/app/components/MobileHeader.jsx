"use client";
import { useState } from "react";
import Link from "next/link";
import { useSidebar } from "../context/SideBarContext";

const MobileHeader = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const { isOpen } = useSidebar();

  return (
    <div
      className={`fixed top-0 left-0 py-10 w-full bg-blue-400 text-white shadow-lg transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-40 py-5`}
    >
      {/* Mobile Menu Items */}
      <ul className="flex flex-col mt-16 space-y-4 text-lg font-semibold px-6">
        {/* Solutions Dropdown */}
        <li>
          <button
            className="w-full text-left flex justify-between"
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
          >
            Solutions
            <span>{isSolutionsOpen ? "▲" : "▼"}</span>
          </button>
          {isSolutionsOpen && (
            <ul className="mt-2 ml-4 space-y-2 text-base">
              <li>
                <Link href="/anycaas">AnyCaaS</Link>
              </li>
              <li>
                <Link href="/anybaas">AnyBaaS</Link>
              </li>
              <li>
                <Link href="/anypaas">AnyPaaS</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        {/* Language Selector */}
        <li>
          <button
            className="w-full text-left flex justify-between"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            Language: {selectedLanguage}
            <span>{isLanguageOpen ? "▲" : "▼"}</span>
          </button>
          {isLanguageOpen && (
            <ul className="mt-2 ml-4 space-y-2 text-base">
              <li onClick={() => handleLanguageChange("EN")}>EN (English)</li>
              <li onClick={() => handleLanguageChange("TH")}>TH (Thai)</li>
              <li onClick={() => handleLanguageChange("ID")}>
                ID (Bahasa Indonesia)
              </li>
              <li onClick={() => handleLanguageChange("TW")}>
                TW (Traditional Chinese)
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
