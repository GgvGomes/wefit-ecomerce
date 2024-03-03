import * as React from "react";

export const LoaderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={63} fill="none" {...props}>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M63.125 31.5c0 17.19-13.935 31.125-31.125 31.125C14.81 62.625.875 48.69.875 31.5.875 14.31 14.81.375 32 .375 49.19.375 63.125 14.31 63.125 31.5Zm-3.42 0C59.704 46.8 47.3 59.204 32 59.204c-15.3 0-27.705-12.403-27.705-27.704C4.295 16.2 16.7 3.795 32 3.795c15.3 0 27.704 12.404 27.704 27.705Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(32 31.5) scale(31.125)"
        gradientUnits="userSpaceOnUse">
        <stop offset={0.871} stopColor="#E6E6E6" />
        <stop offset={0.872} stopColor="gray" stopOpacity={0.01} />
      </radialGradient>
    </defs>
  </svg>
);
