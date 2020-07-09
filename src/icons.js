import React from "react";

export const IconMessages = (props) => {
  return (
    <svg
      height="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
      onClick={props.doOnClick}
      viewBox="0 0 20 17"
      width="24"
    >
      <path
        data-name="Shape 650"
        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
        fill="currentcolor"
      />
    </svg>
  );
};
export const IconJobs = (props) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
    >
      <path
        d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"
        fill="currentColor"
      />
    </svg>
  );
};
export const IconLearn = (props) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
    >
      <path
        d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconProfile = (props) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
        fill="currentColor"
      />
    </svg>
  );
};
export const IconCamera = (props) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
    >
      <circle cx="12" cy="12" r="3.2" />
      <path
        d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        fill="currentColor"
      />
    </svg>
  );
};
export const IconSend = (props) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill={props.fill ? `${props.fill}` : `currentColor`}
    >
      <circle cx="12" cy="12" r="3.2" />
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
    </svg>
  );
};
