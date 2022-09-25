import React from "react";
import { Container } from "./styles";
import { Text } from "../Text";

interface ButtonProps {
  children: any;
  width?: string;
  fontSize?: number;
}

export function Button({ width, children, fontSize }: ButtonProps) {
  return (
    <Container width={width ? width : "100%"}>
      <Text textAlign="center" color="#fff" size={fontSize}>
        {children}
      </Text>
    </Container>
  );
}
