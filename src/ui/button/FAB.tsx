import React, { FC } from 'react';
import { RoundButton } from './RoundButton';
import { Box } from '../layout/Box';
import { TouchableProps } from './Touchable';
import { useTheme } from 'styled-components';

export const FAB: FC<TouchableProps> = props => {
  console.log(props);
  const theme = useTheme();

  return (
    <Box position="absolute" bottom={2} right={2} {...theme.shadows[3]}>
      <RoundButton {...props}>{props.children}</RoundButton>
    </Box>
  );
};
