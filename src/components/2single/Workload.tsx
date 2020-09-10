import React, { FC } from 'react';
import { Box } from '../../ui/layout/Box';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTodoCtx } from '../../containers/todo/useCtx';
import { Touchable } from '../../ui/button/Touchable';

type WorkloadProps = {
  workload: number;
};

export const Workload: FC<WorkloadProps> = ({ workload }) => {
  const workloadArray = [1, 2, 3, 4, 5];

  return (
    <Box display="flex" flexDirection="row">
      {workloadArray.map(num => {
        const isWorkload = num <= workload;
        return (
          <Box key={num}>
            <FontAwesome5
              name="hammer"
              size={24}
              color={isWorkload ? 'black' : '#aaaaaa'}
            />
          </Box>
        );
      })}
    </Box>
  );
};
