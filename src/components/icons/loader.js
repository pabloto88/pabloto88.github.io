import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <text
          x="10"
          y="60"
          fill="#8892b0"
          fontWeight="bold"
          fontSize="50px"
          fontFamily="Calibre, Inter">
          PT
        </text>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 5, 50
        a 45,45 0 1,1 90,0
        a 45,45 0 1,1 -90,0"
      />
    </g>
  </svg>
);

export default IconLoader;
