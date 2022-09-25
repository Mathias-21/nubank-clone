import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../@types";

export function LogoIcon({ color, style }: IconProps) {
  return (
    <Svg width="44" height="24" viewBox="0 0 44 24" fill="none" style={style}>
      <Path
        d="M8.10243 2.28935C9.478 0.844177 11.3027 0 13.4463 0C17.6224 0 20.3912 3.04906 20.9209 7.61677C21.0926 9.10012 21.0911 11.1914 21.0894 13.6137C21.0891 13.8621 21.089 14.114 21.089 14.3691V23.4433H15.3461V16.7318C15.3461 16.7318 15.3344 10.9876 15.2993 9.91403C15.1452 5.23837 12.3771 2.30042 8.10182 2.29726C6.81194 3.66004 6.1208 5.32629 6.01887 7.87403C6.00486 8.22937 6.00839 9.48892 6.01303 11.149C6.01544 12.0091 6.01815 12.9767 6.01887 13.9818C6.02313 18.3565 6.01887 23.4443 6.01887 23.4443H0.276001V13.1152C0.276001 12.7613 0.269551 12.4044 0.263076 12.046C0.250051 11.3252 0.236924 10.5989 0.276001 9.8796C0.340886 8.68058 0.548307 7.50187 1.10781 6.40689C2.38849 3.89835 5.01262 2.2832 7.81015 2.2832C7.90788 2.2832 8.00568 2.28525 8.10243 2.28935Z"
        fill={color ? color : "#820AD1"}
      />
      <Path
        d="M43.724 14.1204C43.7631 13.4012 43.7499 12.6747 43.737 11.954C43.7304 11.5956 43.724 11.2387 43.724 10.8848V0.555653H37.9812C37.9812 0.555653 37.9769 5.6435 37.9812 10.0181C37.9818 11.0232 37.9845 11.9908 37.9869 12.8509C37.9916 14.511 37.9951 15.7706 37.9812 16.1259C37.8792 18.6737 37.188 20.3399 35.8982 21.7028C31.623 21.6995 28.855 18.7616 28.7008 14.086C28.6657 13.0124 28.6509 10.3484 28.6509 7.26286V0.55127L22.9122 0.556632V9.6309C22.9122 9.88598 22.912 10.1378 22.9119 10.3863C22.9101 12.8086 22.9086 14.8998 23.0803 16.3832C23.6089 20.951 26.3777 24 30.5538 24C32.6975 24 34.5222 23.1558 35.8977 21.7106C35.9944 21.7148 36.0921 21.7168 36.1899 21.7168C38.9874 21.7168 41.6115 20.1017 42.8922 17.5931C43.4517 16.4981 43.6591 15.3194 43.724 14.1204Z"
        fill={color ? color : "#820AD1"}
      />
    </Svg>
  );
}