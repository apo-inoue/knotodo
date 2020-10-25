import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text } from '../../ui';
import { calcBusyness } from '../../helpers/calcBusyness';
import { MaterialIcons } from '@expo/vector-icons';

type WorkloadTotalProps = {
  workloadTotal: number;
};

export const WorkloadTotal: FC<WorkloadTotalProps> = ({ workloadTotal }) => {
  const theme = useTheme();
  const busyness = useMemo(() => calcBusyness(workloadTotal), [workloadTotal]);
  const renderBusyEmotion = () => {
    const iconName =
      busyness === 'comfortable'
        ? 'sentiment-satisfied'
        : 'sentiment-very-dissatisfied';
    const text = busyness === 'comfortable' ? 'Okay' : 'too busy..';
    return (
      <>
        <MaterialIcons
          name={iconName}
          size={theme.fontSizes[4]}
          color={theme.colors.main}
        />
        <Text fontSize={theme.fontSizes[2]} color={theme.colors.main}>
          {text}
        </Text>
      </>
    );
  };

  return (
    <Box position="absolute" width="100%" bottom={2} left={3}>
      <Box width="100%" my={2}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Text fontSize={theme.fontSizes[2]} color={theme.colors.main}>
            工数合計:&nbsp;{workloadTotal !== 0 ? workloadTotal : ''}
          </Text>
          <Box ml={3} />
          {renderBusyEmotion()}
        </Box>
      </Box>
    </Box>
  );
};
