import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const UpArrow = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 16" fill="none">
      <Rect x="4.5" width="2" height="16" fill={color} />
      <Path d="M4 0H6.5L2.5 6H0L4 0Z" fill={color} />
      <Rect
        x="14"
        y="16"
        width="2"
        height="16"
        transform="rotate(-180 14 16)"
        fill={color}
      />
      <Path d="M14.5 16H12L16 10H18.5L14.5 16Z" fill={color} />
    </Svg>
  );
};

export default UpArrow;
