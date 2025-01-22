import Image from "next/image";
import React from "react";
import Specialize from "./components/Specialize";
import Testimonials from "@/components/sections/home/Testimonials";
import ContactForm from "@/components/forms/ContactForm";

const Specialties = () => {
  const companies = [
    { name: "Airbnb", logo: "/images/logo1.svg" },
    { name: "Amazon", logo: "/images/logo2.svg" },
    { name: "YouTube", logo: "/images/logo3.svg" },
    { name: "Google", logo: "/images/logo4.svg" },
    { name: "Airbnb2", logo: "/images/logo5.svg" },
    { name: "HytoCore", logo: "/images/logo1.svg" },
  ];
  return (
    <>
      <section className="md:pt-32 pt-12 md:pb-16 pb-6 px-4 bg-[url(/images/hero_bg.svg)] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <div className="text-center  mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-5xl md:leading-[4rem] xl:text-6xl font-bold text-[#1D3B35] mb-6">
              Your Recruitment <br className="hidden md:block" />
              Specialists Across <br className="hidden md:block" /> Industries
            </h1>

            <p className="text-gray-600 text-[14px] md:w-[60%] w-[80%] text-center flex-col mx-auto md:text-lg md:mb-8 mb-4">
              At CASEY&apos;B Recruitment Agency, we take pride in being
              recruitment specialists, delivering exceptional talent solutions
              across a wide range of industries.
            </p>

            <div className="md:my-16 my-12 mx-auto flex flex-col items-center">
              <p className="md:text-sm text-[12px] font-semibold bg-[#D2FFF6] md:p-4 py-4 px-2 text-[#000000] mb-8">
                #We are trusted by 50+ businesses and 1500+ talents.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Specialize />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Specialties;
