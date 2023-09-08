import React from "react";

const Button = (props) => {
  const { children = "button" } = props;
  return (
    <button className="bg-[#00AD98] rounded-lgl text-xl px-5 py-3 rounded-full font-semibold">
      <h1>{children}</h1>
    </button>
  );
};

export default Button;
