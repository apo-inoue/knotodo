import React, { FC, useState } from 'react';
import { Picker } from '../../ui';
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
      width={200}
      height={100}
      selectedValue={selectedValue}
      mode="dropdown"
      onValueChange={valueChangeHandler}>
      {categories.map(category => {
        return (
          <Picker.Item
            key={category.id}
            label={category.category}
            value={category.category}
          />
        );
      })}
    </Picker>
  );
};
