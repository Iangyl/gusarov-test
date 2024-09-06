import { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M6 8V6m0-2h.005M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0"
        stroke="#A0A0AB"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(SVGComponent);
