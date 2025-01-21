import React from "react";

const Figures = () => {
  return (
    <div className="bg-[#2F4F4F] flex flex-row justify-center my-16 items-center">
      <div className="container bg-[url(/images/contact_net.svg)] p-8 bg-repeat z-60 bg-center bg-contain">
        <div className="items-center flex justify-center space-x-28">
          <div className="space-y-4">
            <p className="font-bold text-[#FFCC00E6] text-xl md:text-3xl lg:text-[80px]">
              750+
            </p>
            <p className="text-[#EDFFFCE6]">Network of professionals.</p>
          </div>

          <div className="bg-[#FFCC004D] h-[7rem] w-2" />

          <div className="space-y-4">
            <p className="font-bold text-[#FFCC00E6] text-xl md:text-3xl lg:text-[80px]">
              99%
            </p>
            <p className="text-[#EDFFFCE6]">Recruitment success rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
