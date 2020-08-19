import React, { FC } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Touchable } from '../ui/Touchable';
import { Text, Box } from '../ui';

// type RoundButtonProps = {
//   toucheableProps;
// }; Readonly<TouchableOpacityProps>

export const RoundButton: FC = ({ children }) => {
  return (
    <Touchable
      borderRadius={500}
      width={250}
      height={250}
      backgroundColor="pink"
      alignItems="center"
      justifyContent="center">
      <Text color="black" textAlign="center" fontSize={26}>
        {children}
      </Text>
    </Touchable>
  );
};

// {...touchableProps}
// testID={this.props.testID}
// style={containerStyle}
// accessibilityLabel={this.props.accessibilityLabel}
// accessibilityRole="button
