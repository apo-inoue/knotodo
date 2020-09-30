import React, { FC, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PrimaryButton, Box, Divider, UnderlinedTextForm } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategoryListItem } from '../2single';
import { useCategoryCtx } from '../../containers/contexts/category';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategorySettingProps = {
  categories: CategoryType[];
  onPress: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, c: string) => void;
};

export const CategorySetting: FC<CategorySettingProps> = ({
  categories,
  onPress,
  onDelete,
  onUpdate,
}) => {
  const {
    state: { category },
    categoryInputHandler,
  } = useCategoryCtx();
  const isDeleteAllowed = categories.length > 0;
  const [error, setError] = useState<string>('');
  const onPressWithValidation = () => {
    if (category === '') {
      setError('入力してください');
    } else {
      onPress();
    }
  };

  useFocusEffect(useCallback(() => setError(''), []));

  return (
    <Box width="100%" height="100%">
      <Box mt={2} width="100%" />
      <Box flexDirection="column" flexBasis="400px">
        <FlatList<CategoryType>
          data={categories}
          keyExtractor={(item: CategoryType) => `${item.id}`}
          renderItem={({ item }: { item: CategoryType }) => (
            <>
              <CategoryListItem
                category={item}
                isDeleteAllowed={isDeleteAllowed}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
              <Divider />
            </>
          )}
        />
      </Box>
      <Box
        flexDirection="column"
        width="100%"
        flex="1 1"
        justifyContent="center"
        alignItems="center">
        <Box width="100%">
          <Box justifyContent="center" width="100%" px={4}>
            <UnderlinedTextForm
              placeholder="カテゴリの名前"
              err={error}
              onChangeText={categoryInputHandler}
              value={category}
            />
          </Box>
          <Box mt={3} justifyContent="center" width="100%" px={4}>
            <PrimaryButton
              variant="contained"
              btnSize="lg"
              width="100%"
              stretch
              text="追加"
              onPress={onPressWithValidation}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
