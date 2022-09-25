import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function UserIcon({ color, style }: IconProps) {
  return (
    <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" style={style}>
      <Path
        d="M8 12C3 12 0 16 0 20H2C2 17 4.43654 14 8 14C11.5635 14 14 17 14 20H16C16 16 13 12 8 12Z"
        fill="white"
      />
      <Circle cx="8" cy="5.5" r="5" fill="white" />
      <Circle cx="8" cy="5.5" r="3" fill="#9C03FE" />
    </Svg>
  );
}
