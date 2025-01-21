import React from "react";

const FAQ = () => {
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
    <div className="mx-auto mb-14 w-fit">
      <div className="mx-auto w-fit flex flex-col">
        <p className="text-sm text-center py-4">FAQs</p>
        <h1 className="text-2xl md:text-[50px] leading-[4rem] font-bold text-[#1D3B35] mb-6">
          Frequently asked questions
        </h1>
      </div>

      <div className="mx-28">
        {FAQs.map((faq, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-center">
              <h2 className="text-sm font-semibold">{faq.question}</h2>
              <button className="text-4xlxl">+</button>
            </div>
            {/* <p>{faq.answer}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
