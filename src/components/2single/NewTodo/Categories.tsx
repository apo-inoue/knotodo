import React, { useState } from 'react';
import { Box } from '../../../ui';
import { Picker, Form } from 'native-base';

export const Categories = () => {
  const [selectedValue, setSelectedValue] = useState('work');
  const valueChangeHandler = (text: string) => {
    setSelectedValue(text);
  };

  return (
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
  );
};
