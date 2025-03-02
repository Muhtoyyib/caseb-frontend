"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Mission = () => {
  const [activeContainer, setActiveContainer] = useState(0);
  const mission = [
    {
      title: "EXPERTISE",
      description:
        "Our in-depth knowledge of various industries ensures the perfectmatch between talents and businesses.",
    },
    {
      title: "CUSTOM SOLUTIONS",
      description:
        "Our in-depth knowledge of various industries ensures the perfectmatch between talents and businesses.",
    },
    {
      title: "EXPERTISE",
      description:
        "We offer recruitment services tailored to meet the unique needs of both employers and job seekers",
    },
    {
      title: "WIDE NETWORK",
      description:
        "Gain access to a diverse pool of skilled professionals and reputable companies ready to hire",
    },
    {
      title: "EFFICIENCY",
      description:
        "With a proven track record of successful placements, we’re trusted by both businesses and talents.",
    },
    {
      title: "TRUSTED RESULTS",
      description:
        "Experience a seamless, hassle-free recruitment process designed for quick and effective results.",
    },
  ];

  const handleChange = () => {
    setActiveContainer((prev) => (prev === mission.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleChange, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="md:mx-auto mx-14 w-fit md:mt-28 flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm py-4">OUR MISSION AND VISION</p>
        <h1 className="hidden md:block text-2xl md:text-[50px] md:leading-[4rem] font-bold text-[#1D3B35] mb-2 md:mb-6">
          Empowering Talents, Enabling <br /> Businesses, Shaping Success.
        </h1>
        <h1 className="md:hidden text-2xl md:text-[50px] text-center md:leading-[4rem] font-bold text-[#1D3B35] mb-2 md:mb-6">
          Empowering Talents, Enabling Businesses, Shaping Success.
        </h1>
      </div>

      <div className="md:flex py-6 space-y-4 md:space-y-0">
        <div className="bg-[#4CB5A1] md:h-[271px] flex flex-col justify-around md:w-[508px] p-6 rounded-xl text-white">
          <p className="md:text-[30px]">MISSION</p>
          <p className="text-sm w-fit leading-6">
            To connect talented professionals with exceptional opportunities
            while empowering businesses with the workforce they need to thrive.
            We aim to create meaningful and lasting partnerships through
            innovative recruitment solutions and a commitment to excellence.
          </p>
        </div>

        <Image
          src="/images/joined.svg"
          alt=""
          width={150}
          height={150}
          className="hidden md:block"
        />

        <div className="bg-[#FAFFFF] md:h-[271px] md:w-[508px] text-[#2F4F4F] flex flex-col p-6 rounded-xl border border-[#00000033]">
          <p className="md:text-[30px] md:pb-8 pb-14 pt-2 ">MISSION</p>
          <p className="text-sm w-fit leading-6">
            To be the leading recruitment agency known for bridging the gap
            between talent and industry, driving growth, innovation, and success
            for both individuals and organizations worldwide.
          </p>
        </div>
      </div>

      <div className="md:my-24 my-8">
        <p className="text-sm text-center py-4">WHY CHOOSE US?</p>
        <div className="my-6 md:flex items-center justify-between">
          {/* <div className="">
            <div className="md:w-[350px] w-[100%]">
              {mission.map((item, i) => (
                <div key={i} className="pb-3">
                  <p
                    className={`${
                      i === activeContainer
                        ? "text-[#2F4F4F] font-semibold"
                        : ""
                    } py-2`}
                  >
                    {item.title}
                  </p>
                  <div
                    className={`${
                      i == activeContainer ? "bg-[#4CB5A1]" : "bg-[#F1FFFCE6]"
                    } border border-[#00000033] p-8 rounded-lg`}
                  >
                    <p
                      className={`text-sm w-full ${
                        i == activeContainer ? "text-white" : ""
                      } leading-6`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="md:w-[350px] w-[100%]">
            {mission.map((item, i) => (
              <div key={i} className="flex items-center gap-4 pb-6">
                {/* Timeline (Dot + Line) */}
                <div className="flex flex-col items-center">
                  {/* Outer Circle */}
                  <div
                    className={`rounded-full w-[28px] h-[28px] flex items-center justify-center ${
                      i === activeContainer
                        ? "bg-[#2F4F4F]"
                        : "bg-[#D9D9D9] border"
                    }`}
                  >
                    {/* Inner Circle */}
                    <div
                      className={`rounded-full w-[14px] h-[14px] ${
                        i === activeContainer
                          ? "bg-[#D9D9D9] border"
                          : "bg-white"
                      }`}
                    ></div>
                  </div>

                  {/* Connector Line (only if not last item) */}
                  {i !== mission.length - 1 + 1 && (
                    <span className="h-16 w-[2px] bg-[#D9D9D9]"></span>
                  )}
                </div>

                {/* Mission Card */}
                <div className="flex-1">
                  <p
                    className={`${
                      i === activeContainer
                        ? "text-[#2F4F4F] font-semibold"
                        : ""
                    } py-2`}
                  >
                    {item.title}
                  </p>
                  <div
                    className={`${
                      i === activeContainer ? "bg-[#4CB5A1]" : "bg-[#F1FFFCE6]"
                    } border border-[#00000033] p-8 rounded-lg`}
                  >
                    <p
                      className={`text-sm w-full ${
                        i === activeContainer ? "text-white" : ""
                      } leading-6`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/missionImage.svg"
              alt="mission"
              width={700}
              height={700}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
