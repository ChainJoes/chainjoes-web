import React from "react";

const TGLogo = ({ color }) => (
  <svg
    width="23"
    height="19"
    viewBox="0 0 23 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.1328 0.215946L0.755912 7.96787C-0.064091 8.32886 -0.341439 9.05178 0.557717 9.44413L5.78527 11.083L18.4248 3.37679C19.115 2.893 19.8215 3.02201 19.2135 3.5542L8.35786 13.2508L8.01686 17.3544C8.3327 17.988 8.91103 17.991 9.27992 17.676L12.2833 14.8725L17.4271 18.6724C18.6218 19.3701 19.2718 18.9198 19.5289 17.6409L22.9027 1.8806C23.253 0.306416 22.6557 -0.387186 21.1328 0.215946Z"
      fill={color || "white"}
    />
  </svg>
);

export default TGLogo;
