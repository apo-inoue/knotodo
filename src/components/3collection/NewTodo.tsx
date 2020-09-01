import React, { FC } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import { NewTodoTitle, NewTodoCategories, NewTodoUrgency } from '../2single';
import { Categories } from '../../types/graphql';
import { useTodoCtx } from '../../containers/todo/useCtx';

type NewTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: (e: string) => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const {
    state: { title },
  } = useTodoCtx();

  return (
    <>
      <NewTodoTitle />
      <Divider />
      <NewTodoCategories categories={categories} />
      <Divider />
      <NewTodoUrgency />
      <PrimaryButton title="追加" onPress={() => onPress(title)} />
    </>
  );
};
