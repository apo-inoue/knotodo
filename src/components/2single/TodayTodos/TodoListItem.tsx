import React, { FC } from 'react';
import { Todos } from '../../../types/graphql';
import { Touchable, PrimaryButton, Box } from '../../../ui';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Left, Right, Text } from 'native-base';

type TodayTodos = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >;
  onPress: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({ todo, onPress }) => {
  const navigation = useNavigation();
  const params = todo;
  const theme = useTheme();

  return (
    <Box flexDirection="row" m={2}>
      <Box
        flexGrow={1}
        flexDirection="column"
        border="1px solid grey"
        borderRightWidth={0}>
        <Touchable onPress={() => navigation.navigate('TodoDetails', params)}>
          <Box width="100%" p={2} border={theme.colors.main}>
            <Box width={200}>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {todo.title}
              </Text>
            </Box>
          </Box>
        </Touchable>
      </Box>
      <Box width={100} flexDirection="column">
        <PrimaryButton onPress={() => onPress(todo.id)} title="Complete" />
      </Box>
    </Box>
  );
};
