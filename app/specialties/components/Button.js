import React from "react";

const Button = ({ className, text }) => {
  return (
    <button
      className={`${className} px-4 py-3 rounded-full border border-[#00000033]`}
    >
      {`${text} →`}
    </button>
  );
};

export default Button;
