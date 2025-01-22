import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Industry Expertise",
      description:
        "CASEY'B understands the unique demands of different industries, allowing clients to benefit from speculative team matches.",
      icon: "/images/register.svg",
    },
    {
      title: "Tailored Recruitment",
      description:
        "Having a dedicated team focused on highlighting best matches while providing personalized recruitment solutions.",
      icon: "/images/Vector2.svg",
    },
    {
      title: "Extensive Network",
      description:
        "Our expertise helps your company scaling top-tier resources who are actively looking to explore new opportunities.",
      icon: "/images/Vector3.svg",
    },
    {
      title: "Proven Success",
      description:
        "We've built a strong reputation for successful placements driving green growth and business success.",
      icon: "/images/Vector3.svg",
    },
  ];

  return (
    <section className="md:m-16 m-8 md:flex items-center bg-gray-50">
      <div className="bg-[#1D3B35] text-white w-full">
        <div className="container bg-[url(/images/hero_bg.svg)] w-full space-y-2 md:py-28 py-12 bg-repeat z-50 bg-center bg-contain mx-auto px-8">
          <p className="text-[12px] py-2">AT A GLANCE</p>
          <h2 className="text-2xl md:text-[55px] md:leading-[65px] font-bold mb-4">
            We are Your <br />
            Co-to Agency <br />
            <p className="font-thin">
              Because We <br /> Have...
            </p>
          </h2>
        </div>
      </div>

      <div className="border py-8 md:pr-8 p-4 flex-col lg:flex lg:items-end border-[#00000099]">
        <div className="md:grid flex flex-col gap-6 md:w-[70%] grid-cols-2">
          {features.map((item, i) => (
            <div
              className="border flex flex-col justify-between rounded-xl border-[#00000099] px-3 pt-4"
              key={i}
            >
              <Image src={item.icon} alt={i} width={35} height={35} />

              <p className="pt-8 font-semibold py-3 text-[20px] text-[#2F4F4F]">
                {item.title}
              </p>
              <p className="leading-8 pb-4">{item.description}</p>
              <div className="bg-[#4CB5A1] w-full h-1 my-4 items-end" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
