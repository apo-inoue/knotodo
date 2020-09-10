import React from 'react';
import { Box, Touchable } from '../../ui';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTodoCtx } from '../../containers/todo/useCtx';

export const Workloads = () => {
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
          <Box key={num} mx={1}>
            <Touchable onPress={() => workloadInputHandler(num)}>
              <FontAwesome5
                name="hammer"
                size={24}
                color={isWorkload ? 'black' : '#aaaaaa'}
              />
            </Touchable>
          </Box>
        );
      })}
    </Box>
  );
};
