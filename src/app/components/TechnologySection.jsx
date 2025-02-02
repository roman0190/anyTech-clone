"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const TechnologySection = () => {
  const [selected, setSelected] = useState(0);
  const swiperRef = useRef(null); // Swiper reference

  const list = [
    {
      id: 0,
      title: "Customer focused",
      subtitle: "Purpose-built financial services",
      des: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      subdes:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
      url: "/assets/sliderImg/img1.avif",
    },
    {
      id: 1,
      title: "Agile and adaptable",
      subtitle: "Agile and adaptable for growth",
      des: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      subdes:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      url: "/assets/sliderImg/img2.avif",
    },
    {
      id: 2,
      title: "Compliance ready",
      subtitle: "Manage compliance with ease",
      des: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      subdes:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
      url: "/assets/sliderImg/img3.avif",
    },
    {
      id: 3,
      title: "Secure and safe",
      subtitle: "Highly secure and safe",
      des: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      subdes:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
      url: "/assets/sliderImg/img4.avif",
    },
  ];

  return (
    <>
      <div className="py-2 lg:mx-[11rem] mx-[10%] z-20  text-black mt-20">
        <div className="flex flex-col items-center gap-6 font-sans">
          <h6 className="text-blue-500 font-bold text-[18px]">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="text-blue-950 font-bold md:text-[60px] text-[32px] text-center">
            The future of finance
          </h2>
        </div>
        {/* Carousel Navigation Buttons */}
        <ul className="lg:flex justify-center items-center gap-2 px-[10%] mt-6 text-blue-500 font-bold text-[20px] flex-wrap hidden">
          {list.map((item, index) => (
            <li
              key={item.id}
              className={`rounded-full py-[1%] px-[4%] hover:cursor-pointer ${
                selected === index ? "bg-blue-200" : "bg-transparent"
              } transition-all duration-300 ease-in-out hover:bg-blue-50`}
              onClick={() => {
                setSelected(index);
                if (swiperRef.current) {
                  swiperRef.current.slideTo(index);
                }
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
        {/* Swiper (Carousel) */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          onSlideChange={(swiper) => setSelected(swiper.realIndex)}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full mt-6 shadow-xl shadow-slate-300 rounded-xl"
        >
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="lg:flex  gap-5  mt-5  px-[5%] py-[3%]">
                <article className="lg:w-[50%] flex flex-col gap-8">
                  <h5 className="text-blue-500 font-bold md:text-[20px] text-[16px] uppercase font-sans">
                    {item.title}
                  </h5>
                  <h1 className="text-blue-900 font-bold md:text-[56px] text-[28px] font-sans leading-[3rem]">
                    {item.subtitle}
                  </h1>
                  <figure className="lg:hidden block">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={1080}
                      height={1080}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <strong>{item.des}</strong>
                  <p>{item.subdes}</p>
                </article>
                <figure className="lg:block hidden lg:w-[50%] rounded-xl h-[425px]">
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={1080}
                    height={1080}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative md:mt-10 mt-20">
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

export default TechnologySection;
