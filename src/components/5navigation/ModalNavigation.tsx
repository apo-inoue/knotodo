import React, { FC, useState } from 'react';
import { DrawerNavigation } from './DrawerNavigation';
import Modal from 'react-native-modal';
import { TodosSort, CategoryFilter } from '../4pages';

type ModalNavigationProps = {
  isSortModalVisible: boolean;
  onPressSort: () => void;
  isFilterModalVisible: boolean;
  onPressFilter: () => void;
};

export const ModalNavigation: FC<ModalNavigationProps> = ({
  isSortModalVisible,
  onPressSort,
  isFilterModalVisible,
  onPressFilter,
}) => {
  return (
    <>
      <Modal
        isVisible={isSortModalVisible}
        onBackdropPress={onPressSort}
        onSwipeComplete={onPressSort}
        swipeDirection={['down', 'up']}>
        <TodosSort />
      </Modal>
      <Modal
        isVisible={isFilterModalVisible}
        onSwipeComplete={onPressFilter}
        onBackdropPress={onPressFilter}
        swipeDirection={['down', 'up']}>
        <CategoryFilter onPress={onPressFilter} />
      </Modal>
      <DrawerNavigation />
    </>
  );
};
