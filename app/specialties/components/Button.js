import Link from "next/link";

const Button = ({ className, text }) => {
  return (
    <Link
      href="/contact-us"
      className={`${className} px-4 py-3 rounded-full border border-[#00000033]`}
    >
      {`${text} →`}
    </Link>
  );
};

export default Button;
