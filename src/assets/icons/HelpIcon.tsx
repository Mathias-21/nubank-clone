import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function HelpIcon({ color, style }: IconProps) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={style}>
      <Circle cx="10" cy="10" r="10" fill="white" />
      <Circle cx="10" cy="10" r="8" fill="#830AD1" />
      <Path d="M9 16V14H11V16H9Z" fill="white" />
      <Path
        d="M11 13H9C9 12.2 9.33333 11.6667 9.5 11.5L11 10C11.8 9.2 12 8.33333 12 8C12 6.4 10.6667 6 10 6C8.4 6 8 7.33333 8 8H6C6.4 4.8 8.83333 4 10 4C13 4 14 6.5 14 8C14 9.2 13.3333 10.1667 13 10.5L11.5 12C11.1 12.4 11 12.8333 11 13Z"
        fill="white"
      />
    </Svg>
  );
}
