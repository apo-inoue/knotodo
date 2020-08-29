import React, { useState } from 'react';
import { Divider, PrimaryButton } from '../../ui';
import { Box } from '../../ui/layout/Box';
import { RadioButton } from '../../ui/input/RadioButton';
import { TextForm } from '../../ui/input/TextForm';
import { Picker } from 'react-native';

export const NewTodoCollection = () => {
  const [title, setTitle] = useState('');
  const titleInputHandler = (text: string) => {
    setTitle(text);
  };
  const [checked, setChecked] = useState(true);
  const [selectedValue, setSelectedValue] = useState('java');
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Box width="100%">
        <TextForm
          label="Email"
          error={null}
          onChangeText={titleInputHandler}
          value={title}
          selectionColor={'green'}
        />
      </Box>
      <Divider />
      <Box width="100%">
        <PrimaryButton title="show" onPress={toggleShow} />
        {show && (
          <Box flex={1} pt={40} alignItems="center">
            <Picker
              selectedValue={selectedValue}
              style={{ height: 260, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </Box>
        )}
      </Box>
      <Divider />
      <Box width="100%">
        <RadioButton checked text="今週中" />
        <RadioButton checked={false} text="今月中" />
        <RadioButton checked={false} text="今年中" />
      </Box>
    </>
  );
};
