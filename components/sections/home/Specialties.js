"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpecialtiesSection() {
  const specialties = [
    "Medical",
    "Construction",
    "IT",
    "Transportation",
    "Machine & Engineering",
    "Retail marketing",
    "Agricultural",
    "Hospitality",
    "Recycling",
    "Horse Rider",
  ];

  const industries = [
    {
      id: 1,
      title: "Medical",
      image: "/images/specialist.svg",
    },
    {
      id: 2,
      title: "Construction",
      image: "/images/construction.svg",
    },

    {
      id: 3,
      title: "I.T",
      image: "/images/it.svg",
    },
    {
      id: 4,
      title: "Transportation",
      image: "/images/transportation.svg",
    },
    {
      id: 5,
      title: "Mechanic & engineering",
      image: "/images/mechanicEngineer.svg",
    },
    {
      id: 6,
      title: "Retail Marketing",
      image: "/images/retailMarketing.svg",
    },
    {
      id: 7,
      title: "Agriculture",
      image: "/images/argriculture.svg",
    },
    {
      id: 8,
      title: "Hospitality",
      image: "/images/hospitality.svg",
    },
    {
      id: 9,
      title: "Recycling",
      image: "/images/recycling.svg",
    },
    {
      id: 10,
      title: "Horse Riding",
      image: "/images/horseRiding.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % industries.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup to prevent multiple intervals
  }, []);

  return (
    <section className="py-8 md:pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3B35] mb-8 md:mb-16">
          We cover various specialties across
          <br className="hidden md:inline" />
          different industries.
        </h2>
      </div>

      <div className="lg:flex flex-wrap flex md:border border-[#2F4F4F80] py-3 md:mx-14 rounded-full justify-center gap-3">
        {specialties.map((specialty, index) => (
          <span
            onClick={() => setActiveTab(index)}
            key={specialty}
            className={`px-4 py-2 cursor-pointer md:py-3 rounded-full text-xs ${
              index === activeTab
                ? "bg-[#4CD4C1] text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {specialty}
          </span>
        ))}
      </div>

      {/* {industries.map((industry, index) => (
        <div key={index} className="flex justify-center relative mt-8">
          <Image
            src={industries[activeTab].image}
            alt="Specialties"
            width={920}
            height={920}
          />

          <div className="lg:px-[22rem] md:px-[3rem] px-4 items-center absolute w-full top-8">
            <div className="flex justify-between">
              <p className="bg-[#D4F3F3] rounded-full p-2 md:py-2 md:px-6 font-semibold">
                Become a Talent →
              </p>
              <p className="text-[#2F4F4F] text-lg font-semibold">
                {industry.title}
              </p>
              <p className="bg-[#D4F3F3] rounded-full p-2 md:py-2 md:px-6 font-semibold">
                Hire a Talent →
              </p>
            </div>

            <div className="hidden my-8 space-y-2 md:flex flex-col justify-center items-center text-center">
              <div className="items-center flex space-x-1">
                <Image
                  src="/images/progress.svg"
                  alt="progress"
                  width={20}
                  height={20}
                />
                <p className="text-sm">
                  Hire top medical professionals effortlessly.
                </p>
              </div>
              <div className="items-center text-center flex space-x-1">
                <Image
                  src="/images/firstaid.svg"
                  alt="firstaid"
                  width={20}
                  height={20}
                />
                <p className="text-sm">
                  Get the right team on board with CASEY’B
                </p>
              </div>
              <div className="items-center text-center flex space-x-1">
                <Image
                  src="/images/bulb.svg"
                  alt="bulb"
                  width={20}
                  height={20}
                />
                <p className="text-[#2F4F4F] font-semibold text-sm">
                  Linking the medical industry with the right talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))} */}

      <div className="flex justify-center bg-[url(/images/hero_bg.svg)] bg-no-repeat relative mt-8">
        <Image
          src={industries[activeTab].image}
          alt={industries[activeTab].title}
          width={720}
          height={720}
          className="lg:mt-[12rem] md:mt-32 mt-20"
        />

        <div className="lg:px-[17rem] md:px-[3rem] px-4 items-center absolute w-full">
          <div className="flex items-center justify-between">
            <p className="bg-[#D4F3F3] rounded-full md:text-base text-sm p-2 md:py-2 md:px-6 font-semibold">
              Become a Talent →
            </p>
            <p className="text-[#2F4F4F] md:text-lg text-[12px] font-semibold">
              {industries[activeTab].title}
            </p>
            <p className="bg-[#D4F3F3] rounded-full md:text-base text-sm p-2 md:py-2 md:px-6 font-semibold">
              Hire a Talent →
            </p>
          </div>

          <div className="hidden my-8 space-y-2 md:flex flex-col justify-center items-center text-center">
            <div className="items-center flex space-x-1">
              <Image
                src="/images/progress.svg"
                alt="progress"
                width={20}
                height={20}
              />
              <p className="text-sm">Hire top professionals effortlessly.</p>
            </div>
            <div className="items-center text-center flex space-x-1">
              <Image
                src="/images/firstaid.svg"
                alt="firstaid"
                width={20}
                height={20}
              />
              <p className="text-sm">
                Get the right team on board with CASEY’B
              </p>
            </div>
            <div className="items-center text-center flex space-x-1">
              <Image src="/images/bulb.svg" alt="bulb" width={20} height={20} />
              <p className="text-[#2F4F4F] font-semibold text-sm">
                Linking industries with the right talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
