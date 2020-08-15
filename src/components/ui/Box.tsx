import { ViewProps } from "react-native";
import { ReactNode } from "react";
import styled from "styled-components/native";
import { space, layout, typography, color, ColorProps } from "styled-system";

type View = ColorProps &
  Readonly<ViewProps> &
Readonly<{ children?: ReactNode }>;

export const Box = styled.View<View>`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;
