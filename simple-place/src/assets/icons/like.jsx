export const like = ({ stroke, color, width = "26", height = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <title>like</title>
    <path
      d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
      stroke={stroke ? stroke : "black"}
      fill={color ? color : "none"}
      strokeWidth={"2px"}
    />
  </svg>
);
