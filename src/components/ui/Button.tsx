import styled, { ThemeProps, DefaultTheme } from 'styled-components/native';
import {
  space,
  typography,
  color,
  textStyle,
  colorStyle,
  buttonStyle,
  ColorProps,
  ColorStyleProps,
  ButtonStyleProps,
  TextStyleProps,
  variant,
} from 'styled-system';
import { ButtonProps } from 'react-native';
import { ReactNode } from 'react';

type Button = ThemeProps<{ colors: { primary: string } }> &
  ColorStyleProps &
  ButtonStyleProps &
  TextStyleProps &
  ColorProps &
  Readonly<ButtonProps> &
  Readonly<{ children?: ReactNode }>;

export const Button = styled.Button<Button>`
  appearance: 'button';
  border: 0;
  outline: 0;
  color: 'pink';

  ${textStyle}
  ${colorStyle}
  ${buttonStyle}
  ${space}
  ${typography}
  ${color}

  ${variant({
    variants: {
      primary: {
        color: '#cccccc',
        bg: '#cccccc',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    },
  })}

  color: ${props => props.theme.colors.primary};
  background-color: yellow;
`;

Button.defaultProps = {
  variant: 'primary',
};
