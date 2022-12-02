import React from "react";
const Menu = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 7H20" stroke={color || "white"} stroke-linecap="round" />
    <path d="M8 17H20" stroke={color || "white"} stroke-linecap="round" />
  </svg>
);

export default Menu;
