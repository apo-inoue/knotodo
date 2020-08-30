import React, { useState } from 'react';
import { Divider } from '../../ui';
import { Box } from '../../ui/layout/Box';
import { RadioButton } from '../../ui/input/RadioButton';
import { TextForm } from '../../ui/input/TextForm';
import { Picker, Form } from 'native-base';
import { NewTodoTitle, NewTodoCategories, NewTodoUrgency } from '../2single';

export const NewTodo = () => {
  return (
    <>
      <NewTodoTitle />
      <Divider />
      <NewTodoCategories />
      <Divider />
      <NewTodoUrgency />
    </>
  );
};
