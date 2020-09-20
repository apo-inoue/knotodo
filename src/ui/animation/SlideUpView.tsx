import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ViewProps } from 'react-native';

export const SlideUpView: React.FC<ViewProps> = ({ children, style }) => {
  const appear = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(appear, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [appear]);

  return (
    <Animated.View
      style={[
        {
          opacity: appear,
          transform: [
            {
              translateX: appear.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0],
              }),
            },
          ],
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};
