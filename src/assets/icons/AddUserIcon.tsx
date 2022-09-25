import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function AddUserIcon({ color, style }: IconProps) {
  return (
    <Svg width="19" height="21" viewBox="0 0 19 21" fill="none" style={style}>
      <Path
        d="M8 11.5C3 11.5 0 15.5 0 19.5H2C2 16.5 4.43654 13.5 8 13.5C11.5635 13.5 14 16.5 14 19.5H16C16 15.5 13 11.5 8 11.5Z"
        fill="white"
      />
      <Path
        d="M12 12L10.5 14.5L13 19.5H17C16.6 14.3 13.5 12.3333 12 12Z"
        fill="#830AD1"
      />
      <Path
        d="M15.2 15.7998V12.7998H14.2H13.7V15.7998H10.7V17.2998H13.7V20.2998H15.2V17.2998H18.2V15.7998H15.2Z"
        fill="white"
      />
      <Circle cx="8" cy="5" r="5" fill="white" />
      <Circle cx="8" cy="5" r="3" fill="#830AD1" />
    </Svg>
  );
}
