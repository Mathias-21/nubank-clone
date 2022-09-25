import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROXO_200};
  padding: 5px 25px 24px;
`;

export const AreaCircleButtonsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0 30px;
`;

export const AreaButtonsHeader = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const CircleProfile = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${({ theme }) => theme.COLORS.ROXO_100};
  margin-left: -8px;
`;

export const AreaContents = styled.View`
  width: 100%;
  padding: 0 25px;
`;
