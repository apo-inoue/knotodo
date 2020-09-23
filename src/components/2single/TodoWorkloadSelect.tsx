import React, { FC } from 'react';
import { Box, Touchable } from '../../ui';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTodoCtx } from '../../containers/contexts/todo';
import { useTheme } from 'styled-components';

export const TodoWorkloadSelect: FC = () => {
  const theme = useTheme();
  const {
    state: { workload },
    workloadInputHandler,
  } = useTodoCtx();

  const workloadArray = [1, 2, 3, 4, 5];

  return (
    <Box display="flex" flexDirection="row">
      {workloadArray.map(num => {
        const isWorkload = num <= workload;

        return (
          <Box key={num}>
            <Touchable onPress={() => workloadInputHandler(num)}>
              <FontAwesome5
                name="hammer"
                size={24}
                color={isWorkload ? theme.colors.main : theme.colors.blacks[3]}
              />
            </Touchable>
          </Box>
        );
      })}
    </Box>
  );
};
