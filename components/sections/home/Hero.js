import Link from "next/link";
import Image from "next/image";

import { ToggleLeft } from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  const companies = [
    { name: "HytoCore", logo: "/placeholder.svg" },
    { name: "Amazon", logo: "/placeholder.svg" },
    { name: "YouTube", logo: "/placeholder.svg" },
    { name: "Google", logo: "/placeholder.svg" },
    { name: "Airbnb", logo: "/placeholder.svg" },
  ];

  return (
    <section className="pt-32 pb-16 px-4 bg-[url(/images/hero_bg.svg)] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto">
        <div className="text-center  mx-auto">
          <div className="flex gap-3 justify-center bg-[#FFCC004D] py-2 px-3 text-sm items-center rounded-3xl">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #2F4F4F 0%, #FFCC00 69.63%, #4CB5A1 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Businesses
            </span>
            <ToggleLeft size={20} />
            <span className="text-[#101010] font-light">Talents</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
            Simplify the Hiring Process
            <span className="block">of Your Business.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            We have a proven track record of{" "}
            <span className="text-[#4CD4C1]">successful hiring</span>. We
            specialize in recruiting highly skilled professionals across{" "}
            <span className="text-[#4CD4C1]">various industries</span>.
          </p>

          <button className="bg-[#1D3B35] text-white hover:bg-[#2a554c] px-6 py-4 md:px-8 md:py-6 text-base md:text-lg">
            Hire a Talent →
          </button>

          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-8">
              We are trusted by 50+ businesses and 1500+ talents.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
              {companies.map((company) => (
                <div key={company.name} className="w-20 md:w-24">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={96}
                    height={40}
                    className="w-full h-8 md:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
