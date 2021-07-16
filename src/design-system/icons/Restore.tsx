import React from "react";

interface RestoreIconProps {
  cn?: string;
}
const RestoreIcon: React.FC<RestoreIconProps> = ({ cn }) => {
  return (
    <svg
      viewBox="0 0 448 448"
      className={cn}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M256,32C149.973,32,64,117.973,64,224H0l85.333,85.333L170.667,224h-64c0-82.453,66.88-149.333,149.333-149.333     S405.333,141.547,405.333,224S338.453,373.333,256,373.333c-32.32,0-62.08-10.347-86.613-27.84L139.2,376.107     C171.627,401.067,212.053,416,256,416c106.027,0,192-85.973,192-192S362.027,32,256,32z" />
      <path d="M298.667,224c0-23.573-19.093-42.667-42.667-42.667S213.333,200.427,213.333,224s19.093,42.667,42.667,42.667     S298.667,247.573,298.667,224z" />
    </svg>
  );
};

export default RestoreIcon;