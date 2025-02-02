"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const end = to;
    if (start === end) return;

    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800 font-bold font-sans text-[96px]"
    >
      {count}
    </motion.span>
  );
};

const TrustedSection = () => {
  return (
    <div className="text-center">
      <h5 className="text-blue-500 font-bold text-md uppercase text-[18px] font-sans mb-8">
        Trusted by the best
      </h5>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800 font-bold text-[96px]">
            &gt;
          </span>
          <Counter from={0} to={20} />
          <p className="text-gray-600 text-lg">Years of Experience</p>
        </div>
        <div>
          <Counter from={0} to={40} />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800 font-bold text-[96px]">
            +
          </span>
          <p className="text-gray-600 text-lg">Financial Institutions</p>
        </div>
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800 font-bold text-[96px]">
            &gt;
          </span>
          <Counter from={0} to={200} />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800 font-bold text-[96px]">
            m
          </span>
          <p className="text-gray-600 text-lg">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
