import React, { FC } from 'react';
import { RoundButton } from './RoundButton';
import { Box } from '../layout/Box';
import { TouchableProps } from './Touchable';
import { useTheme } from 'styled-components';

export const FAB: FC<TouchableProps> = props => {
  const theme = useTheme();
  const shadow = theme.shadows[3];

  return (
    <Box position="absolute" bottom={2} right={2} style={{ ...shadow }}>
      <RoundButton {...props}>{props.children}</RoundButton>
    </Box>
  );
};
