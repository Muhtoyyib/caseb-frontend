// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";

// const TalentHero = ({ toggleTalent }) => {
//   return (
//     <motion.div
//       initial={{ x: "100vw", opacity: 0 }}
//       animate={toggleTalent ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }}
//       transition={{ duration: 0.7, ease: "easeInOut" }}
//       className="text-center overflow-hidden mx-auto mb-8"
//     >
//       {" "}
//       <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
//         Simplify Your Job{" "}
//         <span className="bg-[url('/images/line.svg')] bg-no-repeat">
//           Search{" "}
//         </span>
//         <br />
//         Journey.
//       </h1>
//       <p className="text-gray-600 text-base w-[60%] text-center flex-col mx-auto md:text-lg mb-8">
//         Unlock access to exciting{" "}
//         <span className="text-[#FFCC00E6]">career opportunities</span> We {""}
//         <span className="text-[#FFCC00E6]">connect</span> skilled professionals{" "}
//         <br />
//         with top companies across diverse industries
//       </p>
//       <Link
//         href={"/contact-us"}
//         className="bg-[#1D3B35] text-white rounded-full hover:bg-[#2a554c] px-6 md:px-8 md:py-4 mb-6 text-base md:text-lg"
//       >
//         Get Hired →
//       </Link>
//     </motion.div>
//   );
// };

// export default TalentHero;

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
};

const TalentHero = ({ toggleTalent }) => {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full text-center mx-auto mb-8"
    >
      <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
        Simplify Your Job{" "}
        <span className="bg-[url('/images/line.svg')] bg-contain bg-no-repeat">
          Search{" "}
        </span>
        <br className={"md:block hidden"} />
        Journey.
      </h1>
      <p className="text-gray-600 text-base md:w-[60%] mx-auto md:text-lg mb-8">
        Unlock access to exciting{" "}
        <span className="text-[#FFCC00E6]">career opportunities</span>. We{" "}
        <span className="text-[#FFCC00E6]">connect</span> skilled professionals
        with top companies.
      </p>
      <Link
        href="/contact-us"
        className="bg-[#1D3B35] text-white rounded-full hover:bg-[#2a554c] px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
      >
        Get Hired →
      </Link>
    </motion.div>
  );
};
export default TalentHero;
