import React, { FC, useState } from 'react';
import { Box } from '../../../ui';
import { Picker, Form } from 'native-base';

type CategoriesProps = {
  categories: any;
};

export const Categories: FC<CategoriesProps> = ({ categories }) => {
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
