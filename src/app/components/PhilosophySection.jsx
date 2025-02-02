import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const PhilosophySection = () => {
  const list = [
    {
      id: 1,
      url: "/assets/icons/PhilosophyIcon/share.svg",
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      id: 2,
      url: "/assets/icons/PhilosophyIcon/idea.png",
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      id: 3,
      url: "/assets/icons/PhilosophyIcon/chip.svg",
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];
  return (
    <div className=" py-2 lg:mx-[11rem] mx-[10%] z-20 pb-10 text-black">
      <div className="flex flex-col  items-center gap-6 font-sans">
        <h6 className="text-blue-500 font-bold text-[18px] font-sans">OUR PHILOSOPHY</h6>
        <h2 className="text-blue-950 font-bold md:text-[60px] text-[32px] text-center">
          Human-centred innovation
        </h2>
        <figure className="w-full h-full">
          <Image
            src="/assets/figure/large.avif"
            alt="alt"
            width={1444}
            height={1444}
            className="hidden md:block w-full h-full"
          />
          <Image
            src="/assets/figure/mobile.avif"
            alt="alt"
            width={1080}
            height={1080}
            className="md:hideen lg:hidden"
          />
        </figure>
      </div>
      <div className="mt-10">
        {/* Desktop View - Grid Layout */}
        <ul className="hidden md:flex justify-between gap-10">
          {list.map((item) => (
            <li
              key={item.id}
              className="bg-[#F8FCFF] px-10 py-6 flex flex-col gap-4 rounded-xl text-blue-950"
            >
              <Image
                src={item.url}
                alt="alt"
                width={1080}
                height={1080}
                className="min-w-14 min-h-14 max-w-14 max-h-14"
              />
              <h4 className="text-[28px] font-bold font-sans">
                Full-suite solutions
              </h4>
              <p className="text-[16px] font-sans font-medium text-blue-900">
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </li>
          ))}
        </ul>

        {/* Mobile View - Carousel */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full bg-[#F8FCFF] rounded-xl shadow-lg"
          >
            {list.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="px-10 py-6 flex flex-col gap-4  text-blue-950 ">
                  <Image
                    src={item.url}
                    alt="alt"
                    width={1080}
                    height={1080}
                    className="min-w-14 min-h-14 max-w-14 max-h-14"
                  />
                  <h4 className="text-[28px] font-bold font-sans">
                    Full-suite solutions
                  </h4>
                  <p className="text-[16px] font-sans font-medium text-blue-900">
                    Experience the ease of integration across various banking
                    and payment functions with our comprehensive suite of
                    solutions.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
