import React from 'react';
const config = require('./../../../src/config');

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-1 0 88 88">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 10, 45
        a 38,38 0 1,1 82,0
        a 38,38 0 1,1 -82,0"
        fill={config.colors.navy}
      />
      <g id="B" transform="translate(11.000000, 8.000000)">
        <text
          x="17"
          y="50"
          fill="#8892b0"
          fontWeight="bold"
          fontSize="40px"
          fontFamily="Calibre, Inter">
          PT
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
