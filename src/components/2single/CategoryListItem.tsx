import React, { FC, useState } from 'react';
import { Text, Touchable, Box, SlideUpView, PrimaryButton } from '../../ui';
import { Categories } from '../../types/graphql';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { UnderlinedTextForm } from '../../ui/input/TextForm';

type CategoryListItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
  isDeleteAllowed: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, c: string) => void;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
  isDeleteAllowed,
  onDelete,
  onUpdate,
}) => {
  const theme = useTheme();
  const [editCategory, setEditCategory] = useState<string>(category.category);
  const editCategoryInputHandler = (text: string) => {
    setEditCategory(text);
  };
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const isEditModeToggler = () => {
    setIsEditMode(!isEditMode);
  };
  const onUpdateHandler = () => {
    onUpdate(category.id, editCategory);
    isEditModeToggler();
  };

  return (
    <SlideUpView>
      <Box flexDirection="row" height={48} width="100%">
        <Box flex="1 1" justifyContent="center" height={48}>
          {!isEditMode ? (
            <Text textAlign="left" numberOfLines={1} ellipsizeMode="tail">
              {category.category}
            </Text>
          ) : (
            <UnderlinedTextForm
              placeholder="タイトル"
              error={null}
              onChangeText={editCategoryInputHandler}
              value={editCategory}
            />
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
