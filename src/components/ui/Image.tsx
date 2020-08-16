import { background, BackgroundProps } from 'styled-system';
import styled from 'styled-components/native';
import { ImageProps } from 'react-native';
import { ReactNode } from 'react';

type Image = BackgroundProps &
  Readonly<ImageProps> &
  Readonly<{ children?: ReactNode }>;

export const Image = styled.Image`
  ${background}
`;
