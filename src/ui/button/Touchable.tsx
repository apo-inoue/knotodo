import { TouchableOpacityProps } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import {
  space,
  color,
  border,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
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
    props.size &&
    props.size === 'large' && {
      padding: '12px 16px',
    }};

  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;
