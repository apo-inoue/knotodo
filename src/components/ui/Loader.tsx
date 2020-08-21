import styled, { DefaultTheme } from 'styled-components/native';
import { flex, FlexProps } from 'styled-system';
import { ActivityIndicatorProps } from 'react-native';

type ActivityIndicator = FlexProps & ActivityIndicatorProps & DefaultTheme;

export const Loader = styled.ActivityIndicator<ActivityIndicatorProps>`
  display: flex;
  align-self: center;
  ${flex}
`;
