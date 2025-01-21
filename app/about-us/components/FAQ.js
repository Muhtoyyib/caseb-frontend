"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const toggleFAQ2 = (index) => {
    if (activeIndex2 === index) {
      setActiveIndex2(null);
    } else {
      setActiveIndex2(index);
    }
  };

  const FAQs = [
    {
      question: "What services does CASEY'B offer?",
      answer:
        "We specialize in recruitment solutions for talents and businesses across industries like engineering, I.T., medical, construction, and more. Our services include onboarding professionals, connecting them with top-tier opportunities, and helping businesses find the right candidates for their roles.",
    },
    {
      question: "What industries does CASEY'B specialize in?",
      answer:
        "CaseB offers a wide range of benefits, such as increased job opportunities, improved client relationships, and a better overall work-life balance.",
    },
    {
      question: "How long does it take to find a job?",
      answer:
        "CaseB offers a variety of freelance work options, including web development, graphic design, and software development.",
    },
    {
      question: "Is CASEY'B a physical or recruitment agency?",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
    {
      question: "How does CASEY'B work for job seekers?",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
  ];

  const FAQ = [
    {
      question: "Is CASEY'B a physical or recruitment agency?",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
    {
      question: "How does CASEY'B work for job seekers?",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
    {
      question: "How can businesses recruit through CASEY'B??",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
    {
      question: "How do you ensure the quality of candidates?",
      answer:
        "To hire freelancers for your business, you can use CaseB's search engine or browse through the available profiles on our platform.",
    },
  ];

  return (
    <div className="mx-auto mb-44 w-fit">
      <div className="mx-auto w-fit flex flex-col">
        <p className="text-sm text-center md:py-4">FAQs</p>
        <h1 className="text-2xl md:text-[50px] leading-[4rem] font-bold text-[#1D3B35] mb-6">
          Frequently asked questions
        </h1>
      </div>

      {/* <div className="grid grid-cols-2 mx-44 mt-6 gap-6">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border border-[#00000033] ${
              activeIndex === index ? "bg-[#4CB5A1]" : "bg-[#F7F7F7]"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2
                className={`text-sm font-semibold ${
                  activeIndex === index ? "text-white" : ""
                }`}
              >
                {faq.question}
              </h2>
              <button className="text-2xl" onClick={() => toggleFAQ(index)}>
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {activeIndex === index && (
              <p className="text-white w-[20%]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div> */}
      <div className="flex mx-6 md:mx-28 gap-10">
        <div className="flex-col mt-4 space-y-4 gap-6">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border border-[#00000033] md:w-[450px] pb-4 ${
                activeIndex === index ? "bg-[#4CB5A1]" : "bg-[#F7F7F7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`font-semibold ${
                    activeIndex === index ? "text-white" : ""
                  }`}
                >
                  {faq.question}
                </h2>
                <button className="text-2xl" onClick={() => toggleFAQ(index)}>
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="w-full text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex-col md:mt-6 space-y-4 gap-6">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border border-[#00000033] w-[450px] pb-4 ${
                activeIndex2 === index ? "bg-[#4CB5A1]" : "bg-[#F7F7F7]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`font-semibold ${
                    activeIndex2 === index ? "text-white" : ""
                  }`}
                >
                  {faq.question}
                </h2>
                <button className="text-2xl" onClick={() => toggleFAQ2(index)}>
                  {activeIndex2 === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex2 === index && (
                <p className="w-full text-sm leading-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
