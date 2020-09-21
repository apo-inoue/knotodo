import React, { FC } from 'react';
import { UnderlinedTextForm } from '../../ui';
import { useTodoCtx } from '../../containers/contexts/todo';

export const TodoTitleInput: FC = () => {
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
