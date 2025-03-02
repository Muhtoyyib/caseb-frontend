import Link from "next/link";

const Button = ({ className, text }) => {
  return (
    <Link
      href="/contact-us"
      className={`${className} p-2 md:px-4 md:py-3 rounded-full border border-[#00000033]`}
    >
      {`${text} →`}
    </Link>
  );
};

export default Button;
