import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function ArrowLearnMoreIcon({ color, style }: IconProps) {
  return (
    <Svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={style}>
      <Path
        d="M1 9L0 8L6.5 1.5H1V0H9V8H7.5V2.5L1 9Z"
        fill={color ? color : "#830AD1"}
      />
    </Svg>
  );
}
