import {
  background,
  BackgroundProps,
  layout,
  LayoutProps,
} from 'styled-system';
import styled from 'styled-components/native';
import { ImageProps } from 'react-native';
import { ReactNode } from 'react';

type Image = BackgroundProps &
  ImageProps &
  LayoutProps &
  Readonly<{ children?: ReactNode }>;

export const Image = styled.Image<Image>`
  ${background}
  ${layout}
`;
