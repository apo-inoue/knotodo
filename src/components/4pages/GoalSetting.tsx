import React, { FC, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenLoader, Container } from '../../ui';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import {
  useUpdateUserGoalMutation,
  UserGoalQuery,
  useUserGoalLazyQuery,
} from '../../types/graphql';
import { GoalSettingCollection } from '../3collection';
import { USER_GOAL } from '../../graphql/query/users';
import { useAuthCtx } from '../../containers/contexts/auth';

export const GoalSetting: FC = () => {
  const {
    state: {
      userInfo: { id },
    },
  } = useAuthCtx();
  const [fetchUserGoal, { data, loading, error }] = useUserGoalLazyQuery();

  useFocusEffect(useCallback(() => fetchUserGoal(), [fetchUserGoal]));

  const [updateUserGoal] = useUpdateUserGoalMutation({
    update(cache, { data: updateData }) {
      const newUser = updateData!.update_users!.returning[0];
      cache.writeQuery<UserGoalQuery>({
        query: USER_GOAL,
        data: {
          __typename: 'query_root',
          users: [newUser],
        },
      });
    },
  });
  const updateUserMessageHandler = (goal: string) => {
    updateUserGoal({
      variables: { goal, _eq: id },
      optimisticResponse: {
        __typename: 'mutation_root',
        update_users: {
          __typename: 'users_mutation_response',
          affected_rows: 1,
          returning: [
            {
              __typename: 'users',
              id: data!.users[0].id,
              goal: goal,
            },
          ],
        },
      },
      refetchQueries: [{ query: USER_GOAL }],
    });
  };

  if (loading) {
    return <ScreenLoader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data.users.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container centerContent>
      <GoalSettingCollection
        goal={data.users[0].goal ?? ''}
        onPress={updateUserMessageHandler}
      />
    </Container>
  );
};
