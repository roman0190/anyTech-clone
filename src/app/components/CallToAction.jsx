import React from "react";

export const CallToAction = () => {
  return (
    <div className=" py-2 lg:mx-[13rem] absolute z-20 lg:w-[40%] md:w-[60%] w-full top-40">
      <div className="space-y-6 lg:p-0 p-4">
        <span className=" text-white font-bold lg:text-[80px] text-[56px] leading-[90px] text-left">
          Embrace the future of finance
        </span>
        <p className="font-bold text-lg">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>

        <button className="flex items-center gap-2 md:py-[15.5px] py-[14px] px-[42px] rounded-md shadow-lg text-white justify-center  bg-orange-400 false font-bold text-lg transition-transform duration-500 ease-in-out hover:scale-110  md:w-auto w-full">
          Reach Out to Us
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "translateX(var(--motion-translateX))",
              "--motion-translateX": "0px",
            }}
          >
            <path
              d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
