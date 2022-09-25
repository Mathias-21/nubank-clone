import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function OpenEyeIcon({ color, style }: IconProps) {
  return (
    <Svg width="21" height="13" viewBox="0 0 21 13" fill="none" style={style}>
      <Path
        d="M19.5 8.5C18.3333 6.6667 15 2.4999 10.5 2.5C6.08191 2.5001 2.66671 6.33341 1.5 8.5001L0 7.5C1.16667 5 4.9 0.5 10.5 0.5C16.1 0.5 19.8333 5 21 7.5L19.5 8.5Z"
        fill="white"
      />
      <Circle cx="10.5" cy="8.5" r="4" fill="white" />
      <Path
        d="M12.5 8.5C12.5 9.60457 11.6046 10.5 10.5 10.5C9.39543 10.5 8.5 9.60457 8.5 8.5C8.5 7.39543 9.39543 6.5 10.5 6.5C11.6046 6.5 12.5 7.39543 12.5 8.5Z"
        fill="#830AD1"
      />
    </Svg>
  );
}
