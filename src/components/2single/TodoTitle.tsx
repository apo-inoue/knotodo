import React, { FC } from 'react';
import { UnderlinedTextForm, Text } from '../../ui';
import { useTodoCtx } from '../../containers/contexts/todo';

export const TodoTitle: FC<{ title: string }> = ({ title }) => {
  return <Text>{title}</Text>;
};

export const TodoTitleEdit: FC = () => {
  const {
    state: { title },
    titleInputHandler,
  } = useTodoCtx();

  return (
    <UnderlinedTextForm
      placeholder="タイトル"
      error={null}
      onChangeText={titleInputHandler}
      value={title}
    />
  );
};
