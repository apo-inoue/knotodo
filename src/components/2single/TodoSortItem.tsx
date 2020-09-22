import React, { FC } from 'react';
import { PrimaryButton, Divider, Box, Text } from '../../ui';

type TodoSortItemProps = {
  sort: {
    name: string;
    desc: string;
    asc: string;
  };
};

export const TodoSortItem: FC<TodoSortItemProps> = ({ sort }) => {
  return (
    <Box key={sort.name} width="100%" height={50}>
      <Box flexDirection="row" justifyContent="space-between" width="100%">
        <Box flex="1 1" justifyContent="center" height="100%">
          <Text>{sort.name}</Text>
        </Box>
        <Box
          width={250}
          flexDirection="row"
          my="auto"
          alignItems="center"
          justifyContent="flex-end">
          <Box width={80}>
            <Text>{sort.desc}</Text>
          </Box>
          <Box mr={3} />
          <Box width={80}>
            <Text>{sort.asc}</Text>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
