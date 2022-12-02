import React from "react";
const ArrowLeftGreen = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008"
      stroke={color || "url(#paint0_linear_321_407)"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_321_407"
        x1="15.8577"
        y1="2.35068"
        x2="2.35735"
        y2="15.6721"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowLeftGreen;
