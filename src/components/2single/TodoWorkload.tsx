import React, { FC } from 'react';
import { Box } from '../../ui';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

type WorkloadProps = {
  workload: number;
};

export const TodoWorkload: FC<WorkloadProps> = ({ workload }) => {
  const theme = useTheme();
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
              color={isWorkload ? theme.colors.main : theme.colors.blacks[3]}
            />
          </Box>
        );
      })}
    </Box>
  );
};
