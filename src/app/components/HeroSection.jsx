import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="relative py-2 lg:mx-[11rem] mx-[10%] z-20 -mt-[14rem] pb-10">
        <div className="lg:grid lg:grid-cols-2 md:space-x-14">
          <div className="text-black space-y-6 pb-4 lg:px-10">
            <h5 className="md:text-[18px] uppercase text-blue-500 font-Montserrat font-bold">
              POWERING THE FUTURE OF FINANCE
            </h5>
            <h1 className="whitespace-pre-line font-sans text-[42px] text-blue-950 lg:text-[56px] font-semibold leading-tight">
              Uncovering new ways to delight customers
            </h1>
            <p className="text-[16px] font-bold text-blue-950">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-blue-900 text-[16px]">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
          <div className="relative">
            <div className=" absolute z-20 ">
              <motion.div
                animate={{ y: ["20px", "5px", "20px"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                className=" translate-x-[-50%] translate-y-[30%]"
                  src="/assets/icons/icon1.svg"
                  alt="alt"
                  width={75}
                  height={75}
                />
              </motion.div>
              <motion.div
                className=" left-[10%] bottom-[-20%]"
                animate={{ y: ["20px", "5px", "20px"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                 className=" translate-x-[120%] translate-y-[120%]"
                  src="/assets/icons/icon2.svg"
                  alt="alt"
                  width={85}
                  height={85}
                />
              </motion.div>
              <motion.div
               className="  right-[10%] bottom-[-30%]"
               animate={{ y: ["20px", "5px", "20px"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                 className=" lg:translate-x-[450%] md:translate-x-[250%] translate-x-[250%]  translate-y-[-40%]"
                  src="/assets/icons/icon3.svg"
                  alt="alt"
                  width={100}
                  height={100}
                />
              </motion.div>
            </div>
            <motion.div className="absolute z-10 ">
              <Image
                src="/assets/backgrounds/WaveLinesMobile2.svg"
                alt="Foreground Image"
                width={500}
                height={700}
                className="blur-sm"
              />
            </motion.div>
            <div className="absolute">
              <Image
                src="/assets/icons/heroImage.avif"
                alt="Background Image"
                width={500}
                height={700}
                className="shadow-xl"
              />
            </div>
            <motion.div
              className="absolute z-10"
              transition={{
                duration: 0.3, // Faster response to scroll
                ease: "easeOut",
              }}
            >
              <Image
                src="/assets/backgrounds/WaveLinesMobile1.svg"
                alt="Foreground Image"
                width={500}
                height={700}
                className="blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-[15rem] md:mt-[40rem] mt-[30rem]">
        <Image
          src="/assets/shadowPath.svg"
          alt="alt"
          width={1080}
          height={1080}
          className="w-full"
        />
      </div>
    </>
  );
};

export default HeroSection;
