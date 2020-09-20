import React, { useEffect } from 'react';
import { Animated, Easing, ViewProps } from 'react-native';

export const SlideUpView: React.FC<ViewProps> = ({ children, style }) => {
  const appear = new Animated.Value(0);
  const hog = 'hoge';
  useEffect(() => {
    if (hog === 'hoge') {
      Animated.timing(appear, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
      console.log('hog', hog);
    }
  }, []);

  return (
    <Animated.View
      style={[
        {
          opacity: appear,
          transform: [
            {
              translateY: appear.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
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