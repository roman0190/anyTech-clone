"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CompanySection = () => {
  const images = [
    { url: "/company/c1.webp" },
    { url: "/company/c2.webp" },
    { url: "/company/c3.webp" },
    { url: "/company/c4.webp" },
    { url: "/company/c5.webp" },
    { url: "/company/c6.webp" },
    { url: "/company/c7.webp" },
    { url: "/company/c8.webp" },
    { url: "/company/c9.webp" },
    { url: "/company/c10.webp" },
    { url: "/company/c11.webp" },
    { url: "/company/c12.webp" },
    { url: "/company/c13.webp" },
    { url: "/company/c14.webp" },
    { url: "/company/c15.webp" },
  ];

  // Duplicate images for infinite scrolling
  const imageList = [...images, ...images];

  return (
    <div className="py-8 lg:mx-[11rem] mx-[1%] z-20 text-black">
      {/* Large Screen Grid Layout */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {images.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full overflow-hidden rounded-lg"
          >
            <Image
              src={item.url}
              alt="Company Logo"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Small Screen Infinite Scroll */}
      <div className="lg:hidden relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }} // Adjusted for infinite effect
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {imageList.map((item, index) => (
            <div
              key={index}
              className="min-w-[50%] sm:min-w-[30%] overflow-hidden rounded-lg flex items-center"
            >
              <Image
                src={item.url}
                alt="Company Logo"
                width={200}
                height={200}
                className="w-auto h-auto max-w-full max-h-[200px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanySection;
