import { memo, SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m14 14-2.333-2.333m1.666-4A5.667 5.667 0 1 1 2 7.667a5.667 5.667 0 0 1 11.333 0"
      stroke={props.color ?? '#A0A0AB'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(SVGComponent);
