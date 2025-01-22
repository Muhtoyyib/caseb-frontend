import { ToggleLeft } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-[#1D3B35] md:m-14 m-8 rounded-xl">
      <div className="container px-4 bg-[url(/images/contact_net.svg)] pb-12 pt-16 bg-repeat z-60 bg-center bg-contain">
        <div className="w-full lg:px-44 px-18 text-center">
          <p className="text-[#E8FFFBE6] md:pb-12 pb-4 text-[12px]">
            CONTACT US
          </p>
          <h2 className="text-[28px] md:text-[40px] w-full font-bold text-white mb-4 md:mb-6">
            Ready to take your hiring to the next stage?
          </h2>
          <div className="flex w-fit mx-auto mb-8 gap-3 justify-center bg-[#D9D9D9] py-2 px-3 text-sm items-center rounded-3xl">
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
            <ToggleLeft size={20} />
            <span className="text-[#101010] font-light">Talents</span>
          </div>

          <form className="grid grid-cols-1 py-4 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className=" bg-[#EDFFFCE6] py-4 px-4 outline-none border-gray-600 rounded-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className=" bg-[#EDFFFCE6] rounded-full py-4 px-4 outline-none border-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className=" bg-[#EDFFFCE6] rounded-full py-4 px-4 outline-none border-gray-600"
            />
            <input
              type="text"
              placeholder="Company"
              className=" bg-[#EDFFFCE6] rounded-full py-4 px-4 outline-none border-gray-600"
            />
            <button className="col-span-1 mx-auto w-fit md:p-4 p-2 mt-8 rounded-full md:col-span-2 bg-[#4CD4C1] text-white hover:bg-[#3baf9e]">
              Book a Free Consultation →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
