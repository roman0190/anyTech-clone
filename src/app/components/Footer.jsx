import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-900 border-b-[0.01rem] border-blue-400 min-h-[15vh] px-6 lg:px-[11rem] py-4">
        <Image
          src="/assets/icons/Logo.svg"
          alt="alt"
          width={400}
          height={400}
          className="w-[164px] h-auto object-contain lg:w-[250px]"
        />
        <div className="lg:text-right mt-4 lg:mt-0">
          <ul className="flex lg:flex-row gap-4 lg:gap-10 font-bold text-cyan-400 text-center">
            <li>Our Solutions</li>
            <li className="lg:block border-r-[0.01rem] border-cyan-400 py-4"></li>
            <li>AnyCaaS</li>
            <li>AnyBaaS</li>
            <li>AnyPaaS</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-950 min-h-[6vh] px-6 lg:px-[11rem] py-3 text-center text-cyan-600 font-medium">
        <span>
          <span className="font-bold">©2023 All rights reserved. </span>Any
          Technology Pte Ltd.
        </span>
        <span className="mt-2 lg:mt-0">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
