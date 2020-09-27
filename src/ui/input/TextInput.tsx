import styled, { css } from 'styled-components/native';
import { border, layout, BorderProps, LayoutProps } from 'styled-system';
import { TextInputProps } from 'react-native';

export type CustomTextInputProps = {
  variant?: 'outlined' | 'underlined';
} & BorderProps &
  LayoutProps &
  TextInputProps;

export const TextInput = styled.TextInput<CustomTextInputProps>`
  height: 40px;
  width: 100%;
  border-color: ${props => props.theme.colors.main};
  padding-left: 4px;
  font-size: 17px;

  ${props =>
    (props.variant === 'outlined' || !props.variant) &&
    css`
      border-width: 1px;
    `};

  ${props =>
    props.variant === 'underlined' &&
    css`
      border-bottom-width: 1px;
    `};

  ${border};
  ${layout};
`;
