import styled from 'styled-components/native';

type Container = Partial<{
  fill: boolean;
  fullWidth: boolean;
  centerContent: boolean;
}>;

export const Container = styled.View<Container>`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;

  ${props => props.fill && `flex: 1`}
  ${props => props.fullWidth && `width: 100%`}
  ${props =>
    props.centerContent &&
    `
    justifyContents: center;
    alignItems: center;
  `}
`;
