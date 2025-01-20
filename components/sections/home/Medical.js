import Image from "next/image";

export default function MedicalSection() {
  return (
    <section className="bg-[#F7FDFC] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <button className="w-full md:w-auto border-[#4CD4C1] text-[#4CD4C1] hover:bg-[#4CD4C1] hover:text-white">
              Become a Talent →
            </button>
            <h3 className="text-2xl font-bold text-[#c5d0ce]">Medical</h3>
            <button className="w-full md:w-auto bg-[#1D3B35] text-white hover:bg-[#2a554c]">
              Hire a Talent →
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              {/* <CheckCircle className="text-[#4CD4C1] flex-shrink-0" /> */}
              <span className="text-sm md:text-base">
                Hire top medical professionals effectively.
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              {/* <CheckCircle className="text-[#4CD4C1] flex-shrink-0" /> */}
              <span className="text-sm md:text-base">
                Get the right team on board with CASEY&apos;B
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              {/* <MapPin className="text-[#4CD4C1] flex-shrink-0" /> */}
              <span className="text-sm md:text-base">
                Linking the medical industry with the right talent.
              </span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Businesses-JduTb8NCTpNEsI41ojGac7q4penAme.png"
              alt="Medical professionals in surgery"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
