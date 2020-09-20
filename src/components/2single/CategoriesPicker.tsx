import React, { FC, useState } from 'react';
import { Picker } from 'react-native';
import { Categories } from '../../types/graphql';
import { ReactText } from 'react';

type CategoriesProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
};

export const CategoriesPicker: FC<CategoriesProps> = ({ categories }) => {
  const [selectedValue, setSelectedValue] = useState<ReactText>('');
  const valueChangeHandler = (itemValue: ReactText) => {
    return setSelectedValue(itemValue);
  };

  return (
    <Picker
      style={{ width: 200, height: 100 }}
      itemStyle={{ fontSize: 16, flex: 1 }}
      selectedValue={selectedValue}
      mode="dropdown"
      onValueChange={valueChangeHandler}>
      <Picker.Item label={categories[0].category} value="home" />
      <Picker.Item label="仕事" value="work" />
      <Picker.Item label="ほげ" value="hoge" />
      <Picker.Item label="ふが" value="huga" />
      <Picker.Item label="ふご" value="hugo" />
    </Picker>
  );
};
