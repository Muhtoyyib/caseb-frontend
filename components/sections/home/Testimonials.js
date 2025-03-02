"use client";

// Library imports
import { useRef } from "react";
import Slider from "react-slick";

// Import slick carousel styles
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const testimonials = [
  {
    imgSrc: "/Images/user.svg",
    work: "Managing Partner, Amazon",
    name: "Charle Bently",
    quote:
      "We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amazingly talented and dedicated to their job. I’d recommend them anytime.",
  },
  {
    imgSrc: "/Images/user.svg",
    work: "Managing Partner, Amazon",
    name: "John Doe",
    quote:
      "We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amazingly talented and dedicated to their job. I’d recommend them anytime.",
  },
  {
    imgSrc: "/Images/user.svg",
    work: "Managing Partner, Amazon",
    name: "Emma Wilson",
    quote:
      "The user-friendly interface and responsive customer support make managing investments a breeze.",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  return (
    <div className="md:pt-28 pt-14 w-[90%] mx-auto">
      {/* Header */}
      <div className="flex flex-col xl:flex-row pb-4 justify-between gap-10 items-center">
        <div className="space-y-3 flex flex-col text-center mx-auto sm:space-y-5">
          <p>OUR CLIENTS</p>
          <div className="pt-2 sm:space-y-3">
            <p className="md:text-[50px] text-[35px] font-semibold">
              Message from our <span className="text-[#4CB5A1]">CLIENTS</span>{" "}
              to <span className="text-[#4CB5A1]">YOU</span>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="md:pt-6">
        {" "}
        {/* Reduced padding-bottom */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#F2FFFF] p-6 md:mr-0 mr-14 md:p-6 h-[220px] max-h-[220px] rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.imgSrc}
                    alt="User"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm text-gray-600">{testimonial.work}</p>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <div className="bg-[#4CB5A1] w-16 h-[2px] mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-4 leading-relaxed line-clamp-3">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

