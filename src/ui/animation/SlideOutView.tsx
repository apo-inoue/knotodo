import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ViewProps } from 'react-native';
import { interpolate } from 'react-native-reanimated';

type SlideOutViewProps = {
  isOut: boolean;
} & ViewProps;

export const SlideOutView: React.FC<SlideOutViewProps> = ({
  children,
  style,
  isOut,
}) => {
  const appear = useRef(new Animated.Value(1)).current;
  const slide = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isOut) {
      Animated.timing(appear, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
      Animated.timing(slide, {
        toValue: slide.interpolate({
          inputRange: [0, 300],
          outputRange: [1, 0],
        }),
        useNativeDriver: true,
      });
    }
  }, [appear, slide, isOut]);

  return (
    <Animated.View
      style={[
        {
          opacity: appear,
          transform: [
            {
              translateX: appear.interpolate({
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
