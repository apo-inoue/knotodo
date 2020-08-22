import React, { FC } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Text, Box, Touchable } from '../ui';
import { ButtonBase } from '../ui/ButtonBase';

// type RoundButtonProps = {
//   touchableProps;
// }; Readonly<TouchableOpacityProps>

export const RoundButton: FC = ({ children }) => {
  return (
    <Text color="black" fontSize={26}>
      {children}
    </Text>
  );
};

// {...touchableProps}
// testID={this.props.testID}
// style={containerStyle}
// accessibilityLabel={this.props.accessibilityLabel}
// accessibilityRole="button
