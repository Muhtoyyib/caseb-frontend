import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <Link href="/" className="text-[#4CD4C1] text-2xl font-bold">
            <Image
              src={`/images/CASEY'B.svg`}
              width={200}
              height={32}
              alt="Casey'B logo"
            />
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-sm text-gray-400">Connect with us</span>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <InstagramLogo className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <LinkedinLogo className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FacebookLogo className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <TwitterLogo className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <nav className="grid grid-cols-2 grid-flow-row gap-x-10 gap-y-5">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link
              href="/specialties"
              className="text-gray-400 hover:text-white"
            >
              Our Specialties
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="bg-[#EDFFFCE6] h-[1px] w-4/5 mx-auto"></div>

        <div className=" text-center text-sm text-gray-400">
          © 2024 CASEY&apos;B
        </div>
      </div>
    </footer>
  );
}
