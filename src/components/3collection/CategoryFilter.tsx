import React, { FC, useState } from 'react';
import { Switch } from 'react-native';
import { PrimaryButton, Box, Text, FlatList } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategorySelectItem } from '../2single';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { Divider } from '../../ui/utils/Divider';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategoryProps = {
  categories: CategoryType[];
};

export const CategoryFilter: FC<CategoryProps> = ({ categories }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { filterSelectHandler } = useSortFilterCtx();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <Box mt={4} width="100%" flex={1}>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex="1">
            <Text>すべて</Text>
          </Box>
          <Switch
            trackColor={{ false: theme.colors.white, true: theme.colors.main }}
            thumbColor={theme.colors.white}
            ios_backgroundColor={theme.colors.blacks[8]}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Box>
      </Box>
      <FlatList<CategoryType>
        data={categories}
        keyExtractor={(item: CategoryType) => `${item.id}`}
        renderItem={({ item }: { item: CategoryType }) => (
          <Box width="100%">
            <CategorySelectItem category={item} />
            <Divider />
          </Box>
        )}
      />
      <Box mb={4} flexDirection="row">
        <PrimaryButton
          variant="outlined"
          width="40%"
          stretch
          onPress={navigation.goBack}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          width="40%"
          stretch
          onPress={() => filterSelectHandler(categories[0].id)}
          text="絞り込み"
        />
      </Box>
    </>
  );
};
