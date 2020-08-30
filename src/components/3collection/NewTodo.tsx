import React, { useState } from 'react';
import { Divider } from '../../ui';
import { Box } from '../../ui/layout/Box';
import { RadioButton } from '../../ui/input/RadioButton';
import { TextForm } from '../../ui/input/TextForm';
import { Picker, Form } from 'native-base';

export const NewTodo = () => {
  const [title, setTitle] = useState('');
  const titleInputHandler = (text: string) => {
    setTitle(text);
  };
  const [checked, setChecked] = useState({ week: true, month: false, year: false });
  const checkedHandler = (key: 'week' | 'month' | 'year') => {
    const newChecked = { week: false, month: false, year: false };
    setChecked({ ...newChecked, [key]: true });
  };
  const [selectedValue, setSelectedValue] = useState('work');
  const valueChangeHandler = (text: string) => {
    setSelectedValue(text);
  };

  return (
    <>
      <Box width="100%">
        <TextForm
          label="タイトル"
          error={null}
          onChangeText={titleInputHandler}
          value={title}
          selectionColor={'green'}
        />
      </Box>
      <Divider />
      <Box width="100%">
        <Form>
          <Picker
            note
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={selectedValue}
            onValueChange={valueChangeHandler}>
            <Picker.Item label="ホーム" value="home" />
            <Picker.Item label="仕事" value="work" />
          </Picker>
        </Form>
      </Box>
      <Divider />
      <Box width="100%">
        <RadioButton onPress={() => checkedHandler('week')} checked={checked.week} text="今週中" />
        <RadioButton
          onPress={() => checkedHandler('month')}
          checked={checked.month}
          text="今月中"
        />
        <RadioButton onPress={() => checkedHandler('year')} checked={checked.year} text="今年中" />
      </Box>
    </>
  );
};
