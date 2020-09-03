import React, { FC } from 'react';
import { Todos } from '../../../types/graphql';
import { Touchable, PrimaryButton, Box } from '../../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Left, Right, View, Button, Text } from 'native-base';
import { TextEllipsis } from '../../../ui/typography/TextElipsis';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >;
  onPress: (id: string) => void;
};

export const TodoListItem: FC<TodoListItem> = ({ todo, onPress }) => {
  const navigation = useNavigation();
  const params = todo;
  const theme = useTheme();

  return (
    <Box flexDirection="row" m={2}>
      <Box flexGrow={1} flexDirection="column" border="1px solid grey">
        <Touchable onPress={() => navigation.navigate('TodoDetails', params)}>
          <Box
            width="100%"
            p={2}
            alignItems="center"
            justifyContent="center"
            border={theme.colors.main}
            borderRightWidth={0}>
            <Box width={200}>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {todo.title}
              </Text>
            </Box>
          </Box>
        </Touchable>
      </Box>
      <Box width={100} flexDirection="column">
        <PrimaryButton onPress={() => onPress(todo.id)} title="Today" />
      </Box>
    </Box>
  );
};
