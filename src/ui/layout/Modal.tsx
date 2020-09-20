import React, { FC, useState } from 'react';
import { Modal } from 'react-native';
import { Container } from './Container';
import { Card } from './Card';
import { Touchable } from '../button/Touchable';

const StyledModal: FC = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalToggler = () => {
    return setModalVisible(!modalVisible);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Touchable onPress={modalToggler}>✖️</Touchable>
      <Container>
        <Card m={20} boxShadow={3.84}>
          {children}
        </Card>
      </Container>
    </Modal>
  );
};

export { StyledModal as Modal };
