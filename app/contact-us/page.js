import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import FAQ from "../about-us/components/FAQ";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
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
      <section className="md:pt-32 pt-12 pb-8 px-4 bg-[url(/images/hero_bg.svg)] bg-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <div className="text-center  mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-5xl md:leading-[4rem] xl:text-6xl font-bold text-[#1D3B35] mb-6">
              Get in touch with us today.
            </h1>

            <p className="text-gray-600 text-[14px] md:w-[65%] w-[80%] text-center flex-col mx-auto md:text-lg md:mb-8 mb-4">
              Visit our office to discuss your recruitment needs or career
              opportunities. Our friendly team is here to assist you and provide
              the support you need to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full mx-auto flex flex-col items-center">
        <div className="bg-[#4CB5A1] py-8 w-full flex flex-row justify-center md:my-16 mb-10 items-center">
          <div className="items-center flex gap-4 md:gap-0 md:flex-nowrap flex-wrap justify-center lg:space-x-28 md:space-x-10 md:justify-between">
            <div className="md:space-y-4 flex items-center flex-col">
              <div className="bg-[#EDFFFC80] rounded-full p-4">
                <div className="bg-[#4CB5A1] rounded-full p-3">
                  <FaPhoneVolume size={20} />
                </div>
              </div>
              <p className="text-[#EDFFFCE6] md:text-base text-[12px] py-2">
                +353899605969
              </p>
            </div>

            <div className="bg-[#FFCC004D] md:h-[7rem] h-[4rem] md:block hidden md:w-2 w-1" />

            <div className="md:space-y-4 flex items-center flex-col">
              <div className="bg-[#EDFFFC80] rounded-full p-4">
                <div className="bg-[#4CB5A1] rounded-full p-3">
                  <MdEmail size={20} />
                </div>
              </div>
              <p className="text-[#EDFFFCE6] md:text-base text-[12px] py-2">
                info@caseybrecruitmentsagency.com
              </p>
            </div>

            <div className="bg-[#FFCC004D] md:h-[7rem] h-[4rem] md:block hidden md:w-2 w-1" />

            <div className="md:space-y-4 flex items-center flex-col">
              <div className="bg-[#EDFFFC80] rounded-full p-4">
                <div className="bg-[#4CB5A1] rounded-full p-3">
                  <MdLocationPin size={20} />
                </div>
              </div>
              <p className="text-[#EDFFFCE6] text-center md:text-start md:text-base text-[12px] py-2">
                Block 6. 85 main street Templemore Co.Tipperary
                <br className="block md:hidden" /> Ireland Eircode: E41P7N1
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
      <FAQ />
    </>
  );
};

export default Contact;
