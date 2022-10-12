import * as React from "react";

const SVGComponent = ({ fillColor, ...props }) => (
  <svg width={19} height={11} fill="none" {...props}>
    <path
      d="M9.388 0C5.891 0 2.742 1.741.538 4.521a.915.915 0 0 0 0 1.138c2.204 2.78 5.353 4.522 8.85 4.522s6.646-1.741 8.85-4.522a.915.915 0 0 0 0-1.138C16.034 1.741 12.885 0 9.388 0zm0 7.953a2.862 2.862 0 1 1 0-5.725 2.862 2.862 0 0 1 0 5.725z"
      fill={fillColor}
    />
  </svg>
);

export default SVGComponent;
