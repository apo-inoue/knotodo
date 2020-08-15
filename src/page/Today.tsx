import React from 'react';
import { Container, Button } from '../components/ui';
import { useNavigation } from '@react-navigation/native';

export const Today = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.goBack()} title="GoHome" />
    </Container>
  );
};
