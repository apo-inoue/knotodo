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
      variant="contained"
      color="primary"
      height={50}
      width={50}
      borderRadius={25}
      {...props}>
      {props.children}
    </Touchable>
  );
};

// {...touchableProps}
// testID={this.props.testID}
// style={containerStyle}
// accessibilityLabel={this.props.accessibilityLabel}
// accessibilityRole="button
