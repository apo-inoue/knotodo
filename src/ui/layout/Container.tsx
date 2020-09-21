import React, { FC } from 'react';
import styled from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';
import { Box } from './Box';
import { useTheme } from 'styled-components';

type ContainerProps = Partial<{
  fill: boolean;
  fullWidth: boolean;
  centerContent: boolean;
}> &
  SpaceProps;

const ContainerWidth = styled.View<ContainerProps>`
  flex: 1;
  width: 92%;
  background-color: ${props => props.theme.colors.white};
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;

  ${space};

  ${props => props.fill && 'flex: 1'};
  ${props => props.fullWidth && 'width: 100%'};
  ${props =>
    props.centerContent &&
    `
    justifyContent: center;
    alignItems: center;
  `};
`;

export const Container: FC<ContainerProps> = props => {
  const theme = useTheme();

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      bg={theme.colors.white}>
      <ContainerWidth {...props}>{props.children}</ContainerWidth>
    </Box>
  );
};
