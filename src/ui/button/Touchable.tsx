import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  border,
  layout,
  flexbox,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

type TouchableType = {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'muted' | 'danger';
  btnSize?: 'md' | 'lg';
};

export type TouchableProps = TouchableType &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  TouchableOpacityProps;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;

  ${props =>
    props.color === 'primary' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.main,
    }};
  ${props =>
    props.color === 'primary' &&
    props.variant === 'outlined' && {
      border: `1px solid ${props.theme.colors.main}`,
    }};
  ${props =>
    props.color === 'muted' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.muted,
    }};
  ${props =>
    props.color === 'muted' &&
    props.variant === 'outlined' && {
      border: `1px solid ${props.theme.colors.muted}`,
    }};

  ${props =>
    props.btnSize &&
    props.btnSize === 'lg' && {
      padding: '10px 20px',
    }};

  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;
