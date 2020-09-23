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
          flexDirection="row"
          my="auto"
          alignItems="center"
          justifyContent="flex-end">
          <Box>
            <PrimaryButton
              variant="outlined"
              width={90}
              stretch
              borderBottomRightRadius={0}
              borderTopRightRadius={0}
              text={sort.desc}
            />
          </Box>
          <Box mr="-2px" />
          <PrimaryButton
            variant="contained"
            width={90}
            stretch
            borderBottomLeftRadius={0}
            borderTopLeftRadius={0}
            text={sort.asc}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
