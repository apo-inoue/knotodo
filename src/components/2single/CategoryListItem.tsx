import React, { FC, useState } from 'react';
import { Text, Touchable, Box, SlideUpView, PrimaryButton } from '../../ui';
import { Categories } from '../../types/graphql';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { UnderlinedTextForm } from '../../ui/input/TextForm';

type CategoryListItemProps = {
  category: { __typename?: 'categories' } & Pick<Categories, 'id' | 'title'>;
  isDeleteAllowed: boolean;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
  isDeleteAllowed,
  onDelete,
  onUpdate,
}) => {
  const theme = useTheme();
  const [error, setError] = useState<string>('');
  const [editCategory, setEditCategory] = useState<string>(category.title);
  const editCategoryInputHandler = (text: string) => {
    setEditCategory(text);
  };
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const isEditModeToggler = () => {
    setIsEditMode(!isEditMode);
  };
  const onUpdateHandler = () => {
    if (editCategory === '') {
      setError('入力してください');
    } else {
      onUpdate(category.id, editCategory);
      isEditModeToggler();
    }
  };

  return (
    <SlideUpView>
      <Box flexDirection="row" height={50} width="100%">
        <Box flex="1 1" justifyContent="center" height="100%">
          {!isEditMode ? (
            <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
              {category.title}
            </Text>
          ) : (
            <Box flexDirection="column">
              <UnderlinedTextForm
                placeholder="タイトル"
                err={error}
                onChangeText={editCategoryInputHandler}
                value={editCategory}
              />
              <Text>{error}</Text>
            </Box>
          )}
        </Box>
        <Box
          width={90}
          flexDirection="row"
          my="auto"
          alignItems="center"
          justifyContent="flex-end">
          {!isEditMode ? (
            <>
              <Touchable
                pr={1.2}
                disabled={!isDeleteAllowed}
                onPress={() => onDelete(category.id)}>
                <MaterialCommunityIcons
                  name="delete"
                  size={28}
                  color={
                    isDeleteAllowed ? theme.colors.main : theme.colors.blacks[4]
                  }
                />
              </Touchable>
              <Touchable pr={0} mr="-2px" onPress={isEditModeToggler}>
                <MaterialCommunityIcons
                  name="square-edit-outline"
                  size={28}
                  color={theme.colors.main}
                />
              </Touchable>
            </>
          ) : (
            <PrimaryButton
              variant="contained"
              text="OK"
              onPress={onUpdateHandler}
            />
          )}
        </Box>
      </Box>
    </SlideUpView>
  );
};
