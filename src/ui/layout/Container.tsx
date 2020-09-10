import styled from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';

type Container = Partial<{
  fill: boolean;
  fullWidth: boolean;
  centerContent: boolean;
}> &
  SpaceProps;

export const Container = styled.View<Container>`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  align-items: flex-start;
  padding-left: 4px;
  padding-right: 4px;

  ${space};

  ${props => props.fill && `flex: 1`};
  ${props => props.fullWidth && `width: 100%`};
  ${props =>
    props.centerContent &&
    `
    justifyContent: center;
    alignItems: center;
  `};
`;
