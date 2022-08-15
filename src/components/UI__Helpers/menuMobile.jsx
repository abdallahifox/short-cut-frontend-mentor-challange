import React from "react";

export function MenuMobile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 20 20"
      className="cursor-pointer"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z"
      ></path>
    </svg>
  );
}

export default MenuMobile;
