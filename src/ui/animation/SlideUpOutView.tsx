import React, { useEffect, useRef, useMemo } from 'react';
import { Animated, Easing, ViewProps } from 'react-native';

type SlideUpOutViewProps = {
  isOut: boolean;
} & ViewProps;

export const SlideUpOutView: React.FC<SlideUpOutViewProps> = ({
  children,
  style,
  isOut,
}) => {
  const appear = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!isOut) {
      Animated.timing(appear, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(appear, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    }
  }, [isOut, appear]);

  const translateX = useMemo(
    () =>
      !isOut
        ? appear.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0],
          })
        : appear.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0],
          }),
    [isOut, appear],
  );

  return (
    <Animated.View
      style={[
        {
          opacity: appear,
          transform: [
            {
              translateX: translateX,
            },
          ],
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};
