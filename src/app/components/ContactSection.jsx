import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({
        x: (clientX / window.innerWidth - 0.5) * 50,
        y: (clientY / window.innerHeight - 0.5) * 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative bg-blue-500 w-full md:h-screen h-screen sm:-mt-[30rem] -mt-[20rem] element1 overflow-hidden">
        {/* Image layers with motion animation */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ x: "-10%" }} // Start from left (off-screen)
          animate={{
            x: 0, // Animate to center (visible)
            y: mousePos.y / 2,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/assets/backgrounds/WaveLinesDesktop3.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ x: "10%" }} // Start from right (off-screen)
          animate={{
            x: 0, // Animate to center (visible)
            y: mousePos.y / 2,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/assets/backgrounds/WaveLinesMobile2.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ x: "-10%" }} // Start from left (off-screen)
          animate={{
            x: 0, // Animate to center (visible)
            y: mousePos.y / 2,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/assets/backgrounds/WaveLinesMobile1.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full h-full"
          />
        </motion.div>

        {/* Content Section */}
        <div className="absolute md:bottom-[12%] bottom-[11%] left-[10%] flex flex-col gap-4">
          <h1 className="sm:text-[56px] font-bold font-sans text-[45px] text-white">
            Legacy no longer
          </h1>
          <p className="text-[22px] text-white">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button
            href="/"
            className="text-lg font-bold rounded-md shadow-sm bg-[#ffa052] mt-2 flex justify-center items-center lg:w-[40%] w-[90%] py-3 text-white hover:shadow-lg transition-all group"
          >
            Contact Us
            <svg
              className="fill-white ml-2 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
