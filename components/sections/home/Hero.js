import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const companies = [
    { name: "HytoCore", logo: "/placeholder.svg" },
    { name: "Amazon", logo: "/placeholder.svg" },
    { name: "YouTube", logo: "/placeholder.svg" },
    { name: "Google", logo: "/placeholder.svg" },
    { name: "Airbnb", logo: "/placeholder.svg" },
  ];

  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
              Business
            </span>
            <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
              Talent
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
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
