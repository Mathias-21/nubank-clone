import styled from "styled-components/native";

interface ButtonStyledProps {
  width: string;
}

export const Container = styled.View<ButtonStyledProps>`
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: 56px;
  background-color: #830ad1;
  border-radius: ${({ width }) =>
    Number(width.replace("px", "").replace("%", "")) / 2}px;
`;
