import React, { FC } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import { NewTodoTitle, NewTodoCategories, NewTodoUrgency } from '../2single';

type NewTodoProps = {
  categories: any;
  onPress: () => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  return (
    <>
      <NewTodoTitle />
      <Divider />
      <NewTodoCategories categories={categories} />
      <Divider />
      <NewTodoUrgency />
      <PrimaryButton title="追加" onPress={onPress} />
    </>
  );
};
