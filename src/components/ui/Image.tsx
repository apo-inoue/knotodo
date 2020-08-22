import { background, BackgroundProps } from 'styled-system';
import styled, { DefaultTheme } from 'styled-components/native';
import { ImageProps } from 'react-native';
import { ReactNode } from 'react';

type Image = BackgroundProps & ImageProps & Readonly<{ children?: ReactNode }>;

export const Image = styled.Image<Image>`
  ${background}
`;
