import React from "react";
import "./header.scss";

export default function Header({ text, isMainHeading,postion }) {
  return (
    <div className="headerConatiner mt-10 md:mb-14 mb-10 ">
      <h1
        className={`${isMainHeading ? `md:text-7xl` : `md:text-4xl`} ${
          isMainHeading ? `text-5xl` : `text-3xl`
        } text-gryShade`}
      >
        {text}
      </h1>
      <div className="boxHeader" style={{left:postion ? `${postion}%`: "30%"}}></div>
    </div>
  );
}
