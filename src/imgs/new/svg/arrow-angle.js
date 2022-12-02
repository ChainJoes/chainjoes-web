import React from "react";
const ArrowAngle = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.39673 5.9895L17.981 5.9895L17.981 14.5738"
      stroke={color || "white"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.96021 18.0105L17.8608 6.10989"
      stroke={color || "white"}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowAngle;
