import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({
    theme,
    isActive,
  }: {
    theme: DefaultTheme;
    isActive: FilterStyleProps["isActive"];
  }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;
  margin-right: 12px;

  width: 100px;
  height: 48px;

  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;
