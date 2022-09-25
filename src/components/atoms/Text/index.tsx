import React from "react";
import { CSSProperties } from "styled-components";
import { Container } from "./styles";

interface TextProps {
  children: any;
  size?: number;
  color?: string;
  weight?: number;
  numberOfLines?: number;
  style?: CSSProperties;
  textAlign?: "left" | "center" | "right";
}

export function Text({
  children,
  size,
  color,
  weight,
  numberOfLines,
  style,
  textAlign,
}: TextProps) {
  return (
    <Container
      size={size ? size : 14}
      color={color ? color : "#000"}
      weight={weight ? weight : 500}
      numberOfLines={numberOfLines ? numberOfLines : 1}
      style={style}
      textAlign={textAlign ? textAlign : "left"}
    >
      {children}
    </Container>
  );
}
