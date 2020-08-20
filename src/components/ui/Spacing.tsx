import styled, { DefaultTheme } from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';
import { ReactNode } from 'react';

type Spacing = SpaceProps & Readonly<{ children?: ReactNode }> & DefaultTheme;

export const Spacing = styled.View<Spacing>`
  ${space}
`;
