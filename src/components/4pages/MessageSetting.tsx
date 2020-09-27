import React, { FC } from 'react';
import { ScreenLoader, Container } from '../../ui';
import { NoDataMessage, ErrorMessage } from '../1standalone';
import {
  useGetUserMessageQuery,
  useUpdateUserMessageMutation,
  GetUserMessageQuery,
} from '../../types/graphql';
import { MessageSettingCollection } from '../3collection';
import { GET_USER_MESSAGE } from '../../graphql/query/users';

export const MessageSetting: FC = () => {
  const { data, loading, error } = useGetUserMessageQuery();
  const [updateUserMessage] = useUpdateUserMessageMutation({
    update(cache, { data: updateData }) {
      const newUser = updateData!.update_users!.returning[0];
      cache.writeQuery<GetUserMessageQuery>({
        query: GET_USER_MESSAGE,
        data: {
          __typename: 'query_root',
          users: [newUser],
        },
      });
    },
  });
  const updateUserMessageHandler = (message: string) => {
    updateUserMessage({
      variables: { message: message, _eq: data?.users[0].id ?? '' },
      optimisticResponse: {
        __typename: 'mutation_root',
        update_users: {
          __typename: 'users_mutation_response',
          affected_rows: 1,
          returning: [
            {
              __typename: 'users',
              id: data!.users[0].id,
              message: message,
            },
          ],
        },
      },
      refetchQueries: [{ query: GET_USER_MESSAGE }],
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
      <MessageSettingCollection
        message={data.users[0].message}
        onPress={updateUserMessageHandler}
      />
    </Container>
  );
};
