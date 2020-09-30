import React, { FC, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import Constants from 'expo-constants';
import { useFocusEffect } from '@react-navigation/native';
import {
  PrimaryButton,
  Box,
  Divider,
  UnderlinedTextForm,
  KeyboardAvoid,
} from '../../ui';
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
    <Box width="100%" flex="1 1">
      <Box mt={2} width="100%" />
      <Box flexDirection="column" flexBasis="40%">
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
      <KeyboardAvoid
        behavior="padding"
        keyboardVerticalOffset={50 + Constants.statusBarHeight}
        width="100%"
        flex="1 1"
        justifyContent="center"
        alignItems="center">
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
      </KeyboardAvoid>
    </Box>
  );
};
