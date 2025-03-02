// import Link from "next/link";

// const BusinessHero = ({ toggleTalent }) => {
//   return (
//     <div
//       className={`text-center mx-auto overflow-hidden ${
//         !toggleTalent
//           ? "translate-x-[90rem] opacity-100"
//           : "-translate-x-[90rem] opacity-0"
//       } transition-all ease-in-out duration-700 overflow-hidden`}
//     >
//       <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
//         Simplify the Hiring Process <br className="" />
//         <p className="flex space-x-1 justify-center items-center">
//           <span>of Your</span>
//           <span className="bg-[url('/images/line.svg')] py-2 bg-no-repeat">
//             Business.
//           </span>
//         </p>
//       </h1>

//       <p className="text-gray-600 text-base w-[60%] text-center flex-col mx-auto md:text-lg mb-8">
//         We have a proven track record of{" "}
//         <span className="text-[#4CD4C1]">successful hiring</span>. We specialize
//         in recruiting highly skilled professionals across{" "}
//         <span className="text-[#FFCC00E6]">various industries</span>.
//       </p>

//       <Link
//         href={"/contact-us"}
//         className="bg-[#1D3B35] text-white rounded-full hover:bg-[#2a554c] px-6 md:px-8 md:py-4 mb-6 text-base md:text-lg"
//       >
//         Hire a Talent →
//       </Link>
//     </div>
//   );
// };

// export default BusinessHero;

import Link from "next/link";
import { motion } from "framer-motion";

// const BusinessHero = ({ toggleTalent }) => {
//   return (
//     <motion.div
//       initial={{ x: "100vw", opacity: 0 }}
//       animate={toggleTalent ? { x: "100vw", opacity: 0 } : { x: 0, opacity: 1 }}
//       transition={{ duration: 0.7, ease: "easeInOut" }}
//       className="text-center mx-auto mb-8"
//     >
//       <h1 className="text-3xl md:text-5xl overflow-hidden lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
//         Simplify the Hiring Process <br />
//         <p className="flex space-x-1 justify-center items-center">
//           <span>of Your</span>
//           <span className="bg-[url('/images/line.svg')] py-2 bg-no-repeat">
//             Business.
//           </span>
//         </p>
//       </h1>

//       <p className="text-gray-600 text-base w-[60%] text-center flex-col mx-auto md:text-lg mb-8">
//         We have a proven track record of{" "}
//         <span className="text-[#4CD4C1]">successful hiring</span>. We specialize
//         in recruiting highly skilled professionals across{" "}
//         <span className="text-[#FFCC00E6]">various industries</span>.
//       </p>

//       <Link
//         href={"/contact-us"}
//         className="bg-[#1D3B35] text-white rounded-full hover:bg-[#2a554c] px-6 md:px-8 md:py-4 my-6 text-base md:text-lg"
//       >
//         Hire a Talent →
//       </Link>
//     </motion.div>
//   );
// };

// export default BusinessHero;

const BusinessHero = ({ toggleTalent }) => {
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
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full text-center mx-auto mb-6 md:mb-8"
    >
      <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1D3B35] mb-6">
        Simplify the Hiring Process <br className="hidden md:block" />
        <span className="bg-[url('/images/line.svg')] bg-contain bg-no-repeat">
          Business.
        </span>
      </h1>
      <p className="text-gray-600 text-base md:w-[60%] md:px-0 px-8 mx-auto md:text-lg mb-8">
        We have a proven track record of{" "}
        <span className="text-[#4CD4C1]">successful hiring</span>. We specialize
        in recruiting professionals across{" "}
        <span className="text-[#FFCC00E6]">various industries</span>.
      </p>
      <Link
        href="/contact-us"
        className="bg-[#1D3B35] text-white rounded-full hover:bg-[#2a554c] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
      >
        Hire a Talent →
      </Link>
    </motion.div>
  );
};
export default BusinessHero;
