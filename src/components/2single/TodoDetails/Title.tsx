import React, { FC } from 'react';
import { Text } from '../../../ui';

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return <Text>{title}</Text>;
};
