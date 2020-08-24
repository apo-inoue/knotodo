import React, { FC, useState } from 'react';
import { Modal } from 'react-native';
import { Container } from './Container';
import { Box } from './Box';
import { Card } from './Card';

const StyledModal: FC = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Container>
        <Card m={20} boxShadow={3.84}>
          {children}
        </Card>
      </Container>
    </Modal>
  );
};

export { StyledModal as Modal };
