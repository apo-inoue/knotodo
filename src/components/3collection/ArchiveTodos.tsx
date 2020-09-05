import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Todos } from '../../types/graphql';
import { ArchiveTodoListItem } from '../2single';
import { useTheme } from 'styled-components';
import { AddFab } from '../1standalone/AddFab';
import { Box } from '../../ui';

type ArchiveTodosType = {
  todos: ({ __typename: 'todos' } & Pick<
    Todos,
    'title' | 'id' | 'isToday' | 'isCompleted'
  >)[];
  onPress: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({ todos, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mt={2} width="100%">
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          style={{ width: '100%' }}
          renderItem={({ item, index }) => (
            <ArchiveTodoListItem todo={item} index={index} onPress={onPress} />
          )}
        />
      </Box>
      <AddFab onPress={() => navigation.navigate('NewTodo')} />
    </>
  );
};
