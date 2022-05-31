import React from 'react';

const Wind = props => {
   return (
      <svg
         width={23}
         height={40}
         // fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="m7.244 1.572.3 2.27 2.252.416-2.066.987.3 2.27-1.577-1.66-2.066.988L5.478 4.83 3.901 3.17l2.252.415 1.09-2.013ZM2.082 27.366l2.102.907 1.513-1.719-.213 2.28 2.102.907-2.234.502-.213 2.28-1.168-1.97-2.234.502 1.512-1.719-1.167-1.97Z"
            // fill="#000"
         />
         <path
            // stroke="#000"
            d="M11 .5h12M10 5.5h8M14 14.5h6M10 39.5h10M8 29.5h7M12 34.5h10"
         />
      </svg>
   );
};

export default Wind;
