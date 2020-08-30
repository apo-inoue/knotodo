import React, { useState } from 'react';
import { Box, RadioButton } from '../../../ui';

export const Urgency = () => {
  const [checked, setChecked] = useState({ week: true, month: false, year: false });
  const checkedHandler = (key: 'week' | 'month' | 'year') => {
    const newChecked = { week: false, month: false, year: false };
    setChecked({ ...newChecked, [key]: true });
  };

  return (
    <Box width="100%">
      <RadioButton onPress={() => checkedHandler('week')} checked={checked.week} text="今週中" />
      <RadioButton onPress={() => checkedHandler('month')} checked={checked.month} text="今月中" />
      <RadioButton onPress={() => checkedHandler('year')} checked={checked.year} text="今年中" />
    </Box>
  );
};
