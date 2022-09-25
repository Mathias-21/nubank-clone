import React from "react";
import { Container } from "./styles";
import { Text } from "../Text";

interface ButtonProps {
  children: any;
  width?: string;
  fontSize?: number;
  onPress?: () => void;
}

export function Button({ width, children, fontSize, onPress }: ButtonProps) {
  return (
    <Container width={width ? width : "100%"} onPress={onPress}>
      <Text textAlign="center" color="#fff" size={fontSize}>
        {children}
      </Text>
    </Container>
  );
}
