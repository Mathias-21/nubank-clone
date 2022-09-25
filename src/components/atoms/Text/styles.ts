import styled from "styled-components/native";

interface ContainerProps {
  size: number;
  color: string;
  weight: number;
  textAlign: string;
}

export const Container = styled.Text<ContainerProps>`
  width: 100%;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ textAlign }) => textAlign};
`;
