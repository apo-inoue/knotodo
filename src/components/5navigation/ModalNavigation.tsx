import React, { FC } from 'react';
import { DrawerNavigation } from './DrawerNavigation';
import Modal from 'react-native-modal';
import { ModalSort, ModalFilter } from '../4pages';

type ModalNavigationProps = {
  isSortModalVisible: boolean;
  sortModalToggler: () => void;
  isFilterModalVisible: boolean;
  filterModalToggler: () => void;
};

export const ModalNavigation: FC<ModalNavigationProps> = ({
  isSortModalVisible,
  sortModalToggler,
  isFilterModalVisible,
  filterModalToggler,
}) => {
  return (
    <>
      <Modal
        isVisible={isSortModalVisible}
        onBackdropPress={sortModalToggler}
        onSwipeComplete={sortModalToggler}
        swipeDirection={['down', 'up']}>
        <ModalSort sortModalToggler={sortModalToggler} />
      </Modal>
      <Modal
        isVisible={isFilterModalVisible}
        onSwipeComplete={filterModalToggler}
        onBackdropPress={filterModalToggler}
        swipeDirection={['down', 'up']}>
        <ModalFilter filterModalToggler={filterModalToggler} />
      </Modal>
      <DrawerNavigation />
    </>
  );
};
