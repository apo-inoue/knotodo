import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  border,
  layout,
  flexbox,
  typography,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  TypographyProps,
} from 'styled-system';

type TouchableType = {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'muted' | 'danger';
  btnSize?: 'md' | 'lg';
  stretch?: boolean;
  center?: boolean;
};

export type TouchableProps = TouchableType &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  TypographyProps &
  TouchableOpacityProps;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  min-width: 0;
  border-radius: 4px;
  padding: 8px 12px;

  ${flexbox}

  ${props =>
    props.center && {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }};

  ${props => props.stretch && { width: '100%' }};

  ${props =>
    props.color === 'primary' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.main,
    }};

  ${props =>
    props.color === 'primary' &&
    props.variant === 'outlined' && {
      border: `1px solid ${props.theme.colors.main}`,
      padding: '7px 13px',
    }};

  ${props =>
    props.color === 'muted' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.muted,
      padding: '7px 13px',
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
  ${space}
  ${border}
  ${typography}
`;
