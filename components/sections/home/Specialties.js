import Image from "next/image";

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

  return (
    <section className="py-8 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3B35] mb-8 md:mb-16">
          We cover various specialties across
          <br className="hidden md:inline" />
          different industries.
        </h2>
      </div>

      <div className="lg:flex flex-wrap flex md:border border-[#2F4F4F80] lg:px-14 py-3 lg:mx-24 md:mx-10 rounded-full justify-center gap-3">
        {specialties.map((specialty, index) => (
          <span
            key={specialty}
            className={`px-4 py-2 cursor-pointer md:py-3 rounded-full text-xs ${
              index === 0
                ? "bg-[#4CD4C1] text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {specialty}
          </span>
        ))}
      </div>

      <div className="flex justify-center relative mt-8">
        <Image
          src="/images/specialist.svg"
          alt="Specialties"
          width={920}
          height={920}
        />

        <div className="lg:px-[22rem] md:px-[3rem] px-4 items-center absolute w-full top-8">
          <div className="flex justify-between">
            <p className="bg-[#D4F3F3] rounded-full p-2 md:py-2 md:px-6 font-semibold">
              Become a Talent →
            </p>
            <p className="text-[#2F4F4F] text-lg font-semibold">Medical</p>
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
              <p className="text-[#2F4F4F]">
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
              <p className="text-[#2F4F4F]">
                Get the right team on board with CASEY’B
              </p>
            </div>
            <div className="items-center text-center flex space-x-1">
              <Image src="/images/bulb.svg" alt="bulb" width={20} height={20} />
              <p className="text-[#2F4F4F]">
                Linking the medical industry with the right talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
