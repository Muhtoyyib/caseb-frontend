import Image from "next/image";

const TestimonialCard = ({ imgSrc, flag, name, year, quote }) => {
  const testimonials = [
    {
      imgSrc: "/Images/image-12.svg",
      work: "Managing Partner, Amazon",
      name: "Sophia Lee",
      year: "2021",
      quote:
        "We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amzingly talented and decided to their job. I’d recommend them anytime.",
    },
    {
      imgSrc: "/Images/image-12.svg",
      work: "Managing Partner, Amazon",
      name: "John Doe",
      year: "2022",
      quote: `We have been partnering with CASEY’B for over 5 years and all Talents provided to us from them have been amzingly talented and decided to their job. I’d recommend them anytime.`,
    },
    {
      imgSrc: "/Images/image-12.svg",
      work: "Managing Partner, Amazon",
      name: "Emma Wilson",
      year: "2020",
      quote:
        "The user-friendly interface and responsive customer support make managing investments a breeze",
    },
    // Add more testimonials as needed
  ];
  return (
    <div className="space-y-3 flex space-x-4 items-center px-2">
      {/* Images and Name */}
      {/* <div
        className="h-[450px] w-full relative shadow-sm border border-secondary outline-none rounded-3xl"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%]
         mx-auto bg-white rounded-xl py-3 px-4 flex justify-between items-center"
        >
          <div>
            <h4 className="font-medium text-lg">{name}</h4>
            <p className="text-secondary -mt-1">Investor since {year}</p>
          </div>

          <div className="w-12 h-8 relative">
            <Image
              src={flag}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="px-5">
        <p>&quot;{quote}.&quot;</p>
      </div> */}
      {testimonials.map((testimonial, index) => (
        <div className="bg-[#F2FFFF] p-4 rounded-lg shadow-md" key={index}>
          <div className="flex space-x-2 items-center">
            <div className="w-12 h-8">
              <Image
                src={testimonial.imgSrc}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div>
              <p>{testimonial.name}</p>
              <p>{testimonial.work}</p>
            </div>
          </div>
          <p>{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
