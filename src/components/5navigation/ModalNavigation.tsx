import React, { FC } from 'react';
import { DrawerNavigation } from './DrawerNavigation';
import Modal from 'react-native-modal';
import { TodosSort, CategoryFilter } from '../4pages';

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
        <TodosSort sortModalToggler={sortModalToggler} />
      </Modal>
      <Modal
        isVisible={isFilterModalVisible}
        onSwipeComplete={filterModalToggler}
        onBackdropPress={filterModalToggler}
        swipeDirection={['down', 'up']}>
        <CategoryFilter filterModalToggler={filterModalToggler} />
      </Modal>
      <DrawerNavigation />
    </>
  );
};
