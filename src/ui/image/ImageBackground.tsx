import styled, { DefaultTheme } from 'styled-components/native';
import { color, ColorProps } from 'styled-system';
import { ReactNode } from 'react';
import { ImageBackgroundProps } from 'react-native';

type ImageBackground = ColorProps &
  Readonly<{ children?: ReactNode }> &
  Readonly<ImageBackgroundProps>;

export const ImageBackground = styled.ImageBackground<ImageBackground>`
  background-color: ${props => props.theme.colors.whites[0]};
  ${color}
`;
