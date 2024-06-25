import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.COLORS.GREEN_700,
  })
)``;
