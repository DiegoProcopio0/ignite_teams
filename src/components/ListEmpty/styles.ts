import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_300};
`;
