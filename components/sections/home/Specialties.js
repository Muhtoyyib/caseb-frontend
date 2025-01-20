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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3B35] mb-8 md:mb-16">
          We cover various specialties across
          <br className="hidden md:inline" />
          different industries.
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {specialties.map((specialty, index) => (
            <span
              key={specialty}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm ${
                index === 0
                  ? "bg-[#4CD4C1] text-white"
                  : "border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
