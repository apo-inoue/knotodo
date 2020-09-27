import React, { FC, useState } from 'react';
import { Picker } from '../../ui';
import { Categories } from '../../types/graphql';
import { ReactText } from 'react';

type CategoriesProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  category_id: string;
  categorySelectHandler: (category_id: string) => void;
};

export const CategoriesPicker: FC<CategoriesProps> = ({
  categories,
  category_id,
  categorySelectHandler,
}) => {
  const [selectedValue, setSelectedValue] = useState<ReactText>('');
  const valueChangeHandler = (itemValue: ReactText) => {
    return setSelectedValue(itemValue);
  };

  return (
    <Picker
      width={200}
      height={100}
      selectedValue={category_id}
      mode="dropdown"
      onValueChange={categorySelectHandler}>
      {categories.map(category => {
        return (
          <Picker.Item
            key={category.id}
            label={category.category}
            value={category.id}
          />
        );
      })}
    </Picker>
  );
};
