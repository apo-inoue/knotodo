import React, { FC, useState } from 'react';
import { Box } from '../../../ui';
import { Picker } from '@react-native-community/picker';
import { Categories } from '../../../types/graphql';
import { ReactText } from 'react';

type CategoriesProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
};

export const CategoriesItem: FC<CategoriesProps> = ({ categories }) => {
  const [selectedValue, setSelectedValue] = useState<ReactText>('');
  const valueChangeHandler = (itemValue: ReactText) => {
    return setSelectedValue(itemValue);
  };

  return (
    <Box width="100%">
      <Picker
        style={{ width: 120 }}
        selectedValue={selectedValue}
        onValueChange={valueChangeHandler}>
        <Picker.Item label="ホーム" value="home" />
        <Picker.Item label="仕事" value="work" />
      </Picker>
    </Box>
  );
};
