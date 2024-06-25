import { TextInput } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};

  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`;
