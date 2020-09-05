import React, { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { Todos } from '../../../types/graphql';
import { Touchable, PrimaryButton, Box, Text, Divider } from '../../../ui';
import { useNavigation } from '@react-navigation/native';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >;
  index: number;
  onPress: (id: string) => void;
};

export const TodoListItem: FC<TodoListItem> = ({ todo, index, onPress }) => {
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
            onPress={() => onPress(todo.id)}
            text="Today"
          />
        </Box>
      </Box>
    </Box>
  );
};
