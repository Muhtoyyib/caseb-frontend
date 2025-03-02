// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { X, List, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="text-primary font-bold text-2xl">
//             <Image
//               src={`/images/CASEY'B.svg`}
//               width={200}
//               height={32}
//               alt="Casey'B logo"
//             />
//           </Link>

//           <div className="xl:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X size={24} /> : <List size={24} />}
//             </button>
//           </div>

//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } xl:flex xl:items-center gap-14 absolute xl:relative top-20 xl:top-0 left-0
//             right-0 bg-white xl:bg-transparent p-4 md:p-0 space-y-5 xl:space-y-0`}
//           >
//             <div className="flex flex-col xl:flex-row gap-3 md:gap-10 bg-[#D2FFF699] rounded-3xl py-5 md:py-2 px-5">
//               <Link
//                 href="/"
//                 className={`block md:inline ] py-2 px-3 md:py-1 ${
//                   pathname === "/"
//                     ? "bg-[#4CB5A1] text-white rounded-2xl"
//                     : "text-[#101010"
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about-us"
//                 className={`block md:inline ] py-5 px-3 md:py-1 ${
//                   pathname === "/about-us"
//                     ? "bg-[#4CB5A1] transition-all duration-700 ease-in-out text-white rounded-2xl"
//                     : "text-[#101010 transition-all duration-500"
//                 }`}
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/specialties"
//                 className={`block md:inline ] py-5 px-3 md:py-1 ${
//                   pathname === "/specialties"
//                     ? "bg-[#4CB5A1] transition-all duration-700 ease-in-out text-white rounded-2xl"
//                     : "text-[#101010 transition-all duration-500"
//                 }`}
//               >
//                 Our Specialties
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className={`block md:inline ] py-5 px-3 md:py-1 ${
//                   pathname === "/contact-us"
//                     ? "bg-[#4CB5A1] text-white rounded-2xl"
//                     : "text-[#101010"
//                 }`}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             <div>
//               <Link
//                 href="/contact-us"
//                 className="w-full md:w-auto py-3 px-5 rounded-3xl bg-primary text-white
//                hover:bg-[#2a554c] flex items-center justify-center gap-x-3 text-center"
//               >
//                 Book Service
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { X, List, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
// import { motion } from "framer-motion";

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="text-primary font-bold text-2xl">
//             <Image
//               src={`/images/CASEY'B.svg`}
//               width={200}
//               height={32}
//               alt="Casey'B logo"
//             />
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <div className="xl:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X size={24} /> : <List size={24} />}
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } xl:flex xl:items-center gap-14 absolute xl:relative top-20 xl:top-0 left-0
//             right-0 bg-white xl:bg-transparent p-4 md:p-0 space-y-5 xl:space-y-0`}
//           >
//             <div className="flex flex-col xl:flex-row gap-3 md:gap-10 bg-[#D2FFF699] rounded-3xl py-5 md:py-2 px-5">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About Us", path: "/about-us" },
//                 { name: "Our Specialties", path: "/specialties" },
//                 { name: "Contact Us", path: "/contact-us" },
//               ].map((link) => (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className="relative px-3 py-2 text-lg font-medium group"
//                 >
//                   {/* Link Text */}
//                   <span
//                     className={`${
//                       pathname === link.path
//                         ? "text-[#4CB5A1] font-bold"
//                         : "text-[#101010]"
//                     } transition-all duration-500`}
//                   >
//                     {link.name}
//                   </span>

//                   {/* Sliding Active Indicator */}
//                   {pathname === link.path && (
//                     <motion.span
//                       layoutId="underline"
//                       className="absolute left-0 bottom-0 h-[3px] w-full bg-[#4CB5A1] rounded-full"
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 20,
//                       }}
//                     />
//                   )}
//                 </Link>
//               ))}
//             </div>

//             {/* Book Service Button */}
//             <div>
//               <Link
//                 href="/contact-us"
//                 className="w-full md:w-auto py-3 px-5 rounded-3xl bg-primary text-white
//                hover:bg-[#2a554c] flex items-center justify-center gap-x-3 text-center"
//               >
//                 Book Service
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, List, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-primary font-bold text-2xl">
            <Image
              src={`/images/CASEY'B.svg`}
              width={200}
              height={32}
              alt="Casey'B logo"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } xl:flex xl:items-center gap-14 absolute xl:relative top-20 xl:top-0 left-0 
            right-0 bg-white xl:bg-transparent p-4 md:p-0 space-y-5 xl:space-y-0`}
          >
            <div className="flex flex-col xl:flex-row gap-3 md:gap-10 bg-[#D2FFF699] rounded-3xl py-5 md:py-2 px-5 relative">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Our Specialties", path: "/specialties" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <Link key={link.path} href={link.path} className="relative">
                  <div className="relative px-4 py-2 text-lg font-medium rounded-2xl overflow-hidden transition-all duration-500">
                    {/* Sliding Background for Active State */}
                    {pathname === link.path && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-[#4CB5A1] rounded-2xl"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "0%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}

                    {/* Text Layer */}
                    <span
                      className={`relative z-10 ${
                        pathname === link.path
                          ? "text-white"
                          : "text-[#101010] hover:text-[#4CB5A1]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Book Service Button */}
            <div>
              <Link
                href="/contact-us"
                className="w-full md:w-auto py-3 px-5 rounded-3xl bg-primary text-white
               hover:bg-[#2a554c] flex items-center justify-center gap-x-3 text-center"
              >
                Book Service
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
