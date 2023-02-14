import React from 'react';

const Clock = ({ className, color = 'white' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    height="16px"
    viewBox="0 0 1024 1024"
  >
    <path
      d="M8.001 512q0-136.993 67.651-252.846t183.502-183.502 252.846-67.651 252.846 67.651 183.502 183.502 67.651 252.846-67.651 252.846-183.502 183.502-252.846 67.651-252.846-67.651-183.502-183.502-67.651-252.846zM161.908 512q0 145.448 102.744 247.771t247.349 102.322 247.349-102.322 102.744-247.771q0-144.605-102.744-247.349t-247.349-102.744-247.349 102.744-102.744 247.349zM254.082 462.108q0-19.449 13.108-32.556t32.556-13.108 32.98 13.529 13.529 32.135q0 19.449-13.529 32.98t-32.98 13.529q-18.604 0-32.135-13.529t-13.529-32.98zM346.257 297.208q0-18.604 13.529-32.556t32.98-13.954q18.604 0 32.135 13.529t13.529 32.98-13.529 32.98-32.135 13.529q-19.449 0-32.98-13.954t-13.529-32.556zM441.813 501.006q0-27.060 17.759-47.779t43.972-24.946l104.014-107.395q-7.611-11.839-7.611-23.677 0-18.604 13.529-32.556t32.98-13.954q18.604 0 32.135 13.529t13.529 32.98-13.529 32.98-32.135 13.529q-13.529 0-24.524-8.456l-46.51 122.618q14.376 18.604 14.376 43.127 0 30.443-21.564 52.006t-52.006 21.564q-31.288 0-52.852-21.564t-21.564-52.006zM684.512 462.108q0-18.604 13.529-32.135t32.98-13.529 32.556 13.108 13.108 32.556-13.529 32.98-32.135 13.529q-19.449 0-32.98-13.529t-13.529-32.98z"
      fill={color}
    />
  </svg>
);

export default Clock;
