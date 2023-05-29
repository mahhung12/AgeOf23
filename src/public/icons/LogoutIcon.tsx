import type { FC, SVGProps } from "react";

const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_512_297)">
        <path
          d="M10 12L19 12M19 12L17 10M19 12L17 14M15 16L15 19C15 20.1046 14.1046 21 13 21L7 21C5.89543 21 5 20.1046 5 19L5 5C5 3.89543 5.89543 3 7 3L13 3C14.1046 3 15 3.89543 15 5L15 8"
          stroke="#1F1F22"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_512_297"
          x="-4"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_512_297"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_512_297"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LogoutIcon;
