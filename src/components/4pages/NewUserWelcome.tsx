import React, { FC, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, Text, Loader } from '../../ui';
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
      category_id_work: data?.insert_categories?.returning[0].id ?? 0,
      category_id_private: data?.insert_categories?.returning[1].id ?? 0,
    },
    onCompleted: seedDataStandByHandler,
  });

  useEffect(() => {
    seedDataCategory();
  }, [seedDataCategory]);

  if (isCategoryStandBy) {
    seedDataTodo();
  }

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
