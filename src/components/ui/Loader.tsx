import styled, { DefaultTheme } from 'styled-components/native';
import { flex, FlexProps } from 'styled-system';
import { ActivityIndicatorProps } from 'react-native';

type ActivityIndicator = FlexProps &
  Readonly<ActivityIndicatorProps> &
  DefaultTheme;

export const Loader = styled.ActivityIndicator<ActivityIndicator>`
  display: flex;
  align-self: center;
  ${flex}
`;
