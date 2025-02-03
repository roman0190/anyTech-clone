"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import { CallToAction } from "./components/CallToAction";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import TechnologySection from "./components/TechnologySection";
import TrustedSection from "./components/TrustedSection";
import CompanySection from "./components/CompanySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({
        x: (clientX / window.innerWidth - 0.5) * 50, // Increased sensitivity
        y: (clientY / window.innerHeight - 0.5) * 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="">
      <Header />
      <MobileHeader />
      <CallToAction />
      <div
        className="relative element bg-blue-500 md:h-[89vh] h-[150vh] overflow-hidden md:mt-0"
      >
          {/* Mobile Left to Right Animation */}
          <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute  top-0 z-10 lg:hidden md:hidden w-full"
        >
          <Image
            src="/assets/backgrounds/WaveLinesMobile1.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full "
          />
        </motion.div>
          {/* Mobile Left to Right Animation */}
          <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1,  }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute  top-0 z-10 lg:hidden md:hidden w-full blur-md"
        >
          <Image
            src="/assets/backgrounds/WaveLinesMobile2.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full"
          />
        </motion.div>
        {/* Right to Left Sliding Image */}
        <motion.div
          className="absolute bottom-0 md:-right-40 md:bottom-auto"
          initial={{ x: 0 }}
          animate={{ x: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Image for Larger Screens with Animation */}
          <div className="hidden md:block ">
            <Image
              src="/assets/backgrounds/image.avif"
              alt="Background Image"
              width={1080}
              height={1080}
              className="md:h-[80vh]"
            />
          </div>
        </motion.div>

        {/* Static Image for Mobile (No Animation) */}
        <div className="md:hidden translate-y-[36rem]">
          <Image
            style={{ clipPath: "polygon(0 40%, 100% 26%, 100% 100%, 0% 100%)" }}
            src="/assets/backgrounds/image.avif"
            alt="Background Image"
            width={1080}
            height={1080}
            className="h-[50vh] object-cover" // Centered and smaller on mobile
          />
        </div>

        {/* Wave Image - Moves All Directions */}
        <motion.div
          className="md:block lg:block hidden top-0 md:bg-blue-500 "
          style={{ clipPath: "polygon(0 0, 81% 0, 28% 100%, 0% 100%)" }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <Image
            src="/assets/backgrounds/WaveLinesDesktop4.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full h-screen"
          />
        </motion.div>

        {/* Another Wave - Moves Down & Parallax Effect */}
        <motion.div
          initial={{ y: "-40%", opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: mousePos.x / 2, y: mousePos.y / 2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:absolute  top-0 z-10"
        >
          <Image
            src="/assets/backgrounds/WaveLinesDesktop1.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full"
          />
        </motion.div>

        {/* Left to Right Animation */}
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, x: mousePos.x / 2, y: mousePos.y / 2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:absolute  top-0 blur-sm z-10"
        >
          <Image
            src="/assets/backgrounds/WaveLinesDesktop3.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-full"
          />
        </motion.div>
      </div>
      <HeroSection />
      <PhilosophySection />
      <TechnologySection />
      <TrustedSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
