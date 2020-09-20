import React, { FC, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { Animation, AnimationProps } from './Animation';

export const FadeInView: FC<AnimationProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animation
      as={Animated.View}
      style={[
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        },
      ]}>
      {props.children}
    </Animation>
  );
};
