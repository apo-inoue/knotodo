import React, { FC, useEffect, useState } from 'react';
import { Container, Text, Loader } from '../../ui';
import { useTheme } from 'styled-components';
import { useAuthCtx } from '../../containers/contexts/auth';
import {
  useSeedDataCategoryMutation,
  useSeedDataTodoMutation,
} from '../../types/graphql';

export const NewUserWelcome: FC = () => {
  const theme = useTheme();
  const [isCategoryStandBy, setIsCategoryStandBy] = useState(false);
  const { seedDataStandByHandler } = useAuthCtx();
  const [seedDataCategory, { data }] = useSeedDataCategoryMutation({
    onCompleted: () => setIsCategoryStandBy(true),
  });
  const [seedDataTodo] = useSeedDataTodoMutation({
    variables: {
      category_id_work: data?.insert_categories?.returning[0].id ?? '',
      category_id_private: data?.insert_categories?.returning[1].id ?? '',
    },
    onCompleted: seedDataStandByHandler,
  });

  useEffect(() => {
    seedDataCategory();
  }, [seedDataCategory]);

  useEffect(() => {
    if (isCategoryStandBy) {
      seedDataTodo();
    }
  }, [seedDataTodo, isCategoryStandBy]);
  console.log(data);

  return (
    <Container centerContent>
      <Text textAlign="center" fontSize={theme.fontSizes[4]}>
        ようこそ！
      </Text>
      <Loader />
      <Text textAlign="center">データを準備しています...</Text>
    </Container>
  );
};
