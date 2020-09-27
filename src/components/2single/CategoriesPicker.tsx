import React, { FC } from 'react';
import { Picker } from '../../ui';
import { Categories } from '../../types/graphql';

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
