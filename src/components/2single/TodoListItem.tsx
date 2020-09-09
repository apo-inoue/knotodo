import React, { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { Todos } from '../../types/graphql';
import { Touchable, PrimaryButton, Box, Text, Divider } from '../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >;
  index: number;
  buttonAction: {
    label: string;
    onPress: (id: string) => void;
  };
};

export const TodoListItem: FC<TodoListItem> = ({
  todo,
  index,
  buttonAction,
}) => {
  const navigation = useNavigation();
  const params = todo;
  const vw = useWindowDimensions().width;

  return (
    <Box>
      {index > 0 && <Divider />}
      <Box flexDirection="row" height={48}>
        <Box flexDirection="column" flexGrow={1}>
          <Touchable
            p={0}
            height={48}
            onPress={() => navigation.navigate('TodoDetails', params)}>
            <Box
              width={0.6 * vw}
              alignItems="flex-start"
              justifyContent="center">
              <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
                {todo.title}
              </Text>
            </Box>
          </Touchable>
        </Box>
        <Box width={100} flexDirection="column" my="auto" alignItems="center">
          <PrimaryButton
            variant="outlined"
            onPress={() => buttonAction.onPress(todo.id)}
            text={buttonAction.label}
          />
        </Box>
      </Box>
    </Box>
  );
};
