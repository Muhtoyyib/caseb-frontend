"use client";

// Library imports
import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import TestimonialCard from "@/components/cards/homecards/TestimonialCard";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = () => {
  const sliderRef = useRef(null);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,

  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

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
          centerMode: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      imgSrc: "/Images/user.svg",
      work: "Managing Partner, Amazon",
      name: "Charle Bently",
      year: "2021",
      quote:
        "We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amzingly talented and decided to their job. I’d recommend them anytime.",
    },
    {
      imgSrc: "/Images/user.svg",
      work: "Managing Partner, Amazon",
      name: "John Doe",
      year: "2022",
      quote: `We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amzingly talented and decided to their job. I’d recommend them anytime.`,
    },
    {
      imgSrc: "/Images/user.svg",
      work: "Managing Partner, Amazon",
      name: "Emma Wilson",
      year: "2020",
      quote:
        "The user-friendly interface and responsive customer support make managing investments a breeze",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="md:pt-32 pt-14 w-[90%] mx-auto">
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between gap-10 items-center">
        <div className="space-y-3 flex flex-col text-center pb-24 mx-auto sm:space-y-5">
          {/* Header title */}
          <p>OUR CLIENTS</p>

          <div className="pt-2 sm:space-y-3">
            <p className="md:text-[50px] text-[35px] font-semibold">
              Message from our <span className="text-[#4CB5A1]">CLIENTS</span>{" "}
              to <span className="text-[#4CB5A1]">YOU</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Slider
        className="mb-8 flex flex-wrap gap-6"
        ref={sliderRef}
        {...settings}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className="bg-[#F2FFFF] p-6 md:h-[25rem] lg:h-[20rem] h-[20rem] rounded-lg space-y-2 shadow-md"
            key={index}
          >
            <div className="flex space-x-2 p-4">
              <div className="w-12 h-8">
                <Image
                  src={testimonial.imgSrc}
                  alt="Background"
                  height={50}
                  width={50}
                  quality={100}
                />
              </div>
              <div>
                <p className="text-xs">{testimonial.work}</p>
                <div>
                  <p className="font-semibold md:text-base text-sm">
                    {testimonial.name}
                  </p>
                  <div className="bg-[#4CB5A1] w-[70%] h-[2px]" />
                </div>
              </div>
            </div>

            <p className="md:text-sm text-xs w-full md:w-[85%] lg:w-[90%] px-4 md:leading-8 leading-6">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
