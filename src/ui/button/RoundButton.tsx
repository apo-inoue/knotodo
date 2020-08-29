import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { TouchableProps, Touchable } from './Touchable';
import { Box } from '../layout/Box';

// type RoundButtonProps = {
//   touchableProps;
// }; Readonly<TouchableOpacityProps>

export const RoundButton: FC<TouchableProps> = props => {
  const theme = useTheme();

  return (
    <Touchable
      backgroundColor={theme.colors.main}
      height={50}
      width={50}
      borderRadius={25}
      {...props}>
      <Box flex={1} justifyContent="center" alignItems="center" p={2}>
        {props.children}
      </Box>
    </Touchable>
  );
};

// {...touchableProps}
// testID={this.props.testID}
// style={containerStyle}
// accessibilityLabel={this.props.accessibilityLabel}
// accessibilityRole="button
