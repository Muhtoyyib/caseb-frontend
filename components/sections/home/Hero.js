"use client";

import Image from "next/image";
import { ToggleLeft } from "@phosphor-icons/react/dist/ssr";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import BusinessHero from "@/components/ui/BusinessHero";
import { useState } from "react";
import TalentHero from "@/components/ui/TalentHero";
import Marquee from "react-fast-marquee";
import { AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [toggleTalent, setToggleTalent] = useState(false);
  const companies = [
    { name: "Airbnb", logo: "/images/logo1.svg" },
    { name: "Amazon", logo: "/images/logo2.svg" },
    { name: "YouTube", logo: "/images/logo3.svg" },
    { name: "Google", logo: "/images/logo4.svg" },
    { name: "Airbnb2", logo: "/images/logo5.svg" },
    { name: "HytoCore", logo: "/images/logo1.svg" },
  ];

  return (
    <section className="md:pt-32 pt-12 md:pb-16 pb-8 px-4 bg-[url(/images/hero_bg.svg)] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto">
        {/* Business Switch */}
        <div className="text-center mx-auto">
          {!toggleTalent && (
            <div className="flex w-fit mx-auto mb-8 gap-3 justify-center bg-[#FFCC004D] py-2 md:py-3 px-4 text-sm items-center rounded-3xl">
              <span
                className="w-fit"
                style={{
                  background:
                    "linear-gradient(90deg, #2F4F4F 0%, #FFCC00 69.63%, #4CB5A1 100%)",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Businesses
              </span>
              <BiToggleLeft
                onClick={() => setToggleTalent(!toggleTalent)}
                size={30}
              />
              <span className="text-[#101010] font-light">Talent</span>
            </div>
          )}

          {/* Toggle */}
          {toggleTalent && (
            <div className="flex w-fit mx-auto mb-8 gap-3 justify-center bg-[#FFCC004D] py-2 md:py-3 px-4 text-sm items-center rounded-3xl">
              <span className="text-[#101010] font-light">Business</span>
              <BiToggleRight
                onClick={() => setToggleTalent(!toggleTalent)}
                size={30}
              />
              <span
                className="w-fit"
                style={{
                  background:
                    "linear-gradient(90deg, #2F4F4F 0%, #FFCC00 69.63%, #4CB5A1 100%)",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                Talents
              </span>
            </div>
          )}

          <AnimatePresence mode="wait" custom={toggleTalent ? 1 : -1}>
            {toggleTalent ? (
              <TalentHero key="talent" toggleTalent={toggleTalent} />
            ) : (
              <BusinessHero key="business" toggleTalent={toggleTalent} />
            )}
          </AnimatePresence>
        </div>

        {/*  */}
        <div className="my-16 mx-auto flex flex-col items-center">
          <p className="md:text-sm text-xs font-semibold text-center bg-[#D2FFF6] p-4 text-[#000000] mb-8">
            #We are trusted by 50+ businesses and 1500+ talents.
          </p>
          {/* <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
            {companies.map((company) => (
              <div key={company.name} className="w-20 md:w-32">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={120}
                  className="w-full h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div> */}

          {/* Moving Brand */}
          <Marquee className="gap-5 md:gap-2 md:mt-6 grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[52rem] mx-auto w-full">
            <div className="mr-5">
              <Image
                src={"/images/logo1.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
            <div className="mr-16">
              <Image
                src={"/images/logo2.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
            <div className="mr-16">
              <Image
                src={"/images/logo3.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
            <div className="mr-16">
              <Image
                src={"/images/logo4.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
            <div className="mr-16">
              <Image
                src={"/images/logo5.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-8 md:h-10 object-contain"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
