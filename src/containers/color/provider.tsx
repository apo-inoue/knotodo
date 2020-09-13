import React, { FC, useState, useCallback } from 'react';
import { useEventCallback } from '../../helpers/useEventCallback';
import { ColorCtxProvider } from './useCtx';
import {
  ColorTypes,
  ColorTypes_Enum,
  useGetColorTypeQuery,
} from '../../types/graphql';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from '../theme/theme';
import { ColorType } from './type';
import { useUpdateColorTypeMutation } from '../../types/graphql';
import { GET_COLOR_TYPE } from '../../graphql/query/users';
import { Box } from '../../ui/layout/Box';

export const colorPalettes: ColorType[] = [
  {
    id: 1,
    color: 'BRAND',
    hex: {
      light: '#636ca0',
      main: '#354171',
      dark: '#021b45',
    },
  },
  {
    id: 2,
    color: 'BLUE',
    hex: {
      light: '#1976d2',
      main: '#1976d2',
      dark: '#1976d2',
    },
  },
  {
    id: 3,
    color: 'GREEN',
    hex: {
      light: '#00796b',
      main: '#00796b',
      dark: '#00796b',
    },
  },
  {
    id: 4,
    color: 'ORANGE',
    hex: {
      light: '#dd2c00',
      main: '#dd2c00',
      dark: '#dd2c00',
    },
  },
  {
    id: 5,
    color: 'PINK',
    hex: {
      light: '#d81b60',
      main: '#d81b60',
      dark: '#d81b60',
    },
  },
  {
    id: 6,
    color: 'GREY',
    hex: {
      light: '#424242',
      main: '#424242',
      dark: '#424242',
    },
  },
];

export const ColorProvider: FC = ({ children }) => {
  const { data } = useGetColorTypeQuery();

  const fetchedColorType = data?.users[0].color_type;
  const fetchedColorPalette =
    fetchedColorType &&
    colorPalettes.find(colorPalette => {
      return colorPalette.color === fetchedColorType;
    });

  const customTheme = fetchedColorPalette && {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...fetchedColorPalette?.hex,
    },
  };

  const loadingTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      light: '#cccccc',
      main: '#bbbbbb',
      dark: '#aaaaaa',
    },
  };

  const [color, setColor] = useState<ColorTypes_Enum>('BRAND');
  const colorSelectHandler = useCallback((color: ColorTypes_Enum) => {
    setColor(color);
  }, []);

  const [
    updateColorType,
    { error, loading, data: mData },
  ] = useUpdateColorTypeMutation({
    refetchQueries: [{ query: GET_COLOR_TYPE }],
  });
  console.log(error, loading, mData, color);
  const updateColorTypeHandler = () => {
    updateColorType;
    return updateColorType({
      variables: {
        color_type: color,
        _eq: data?.users[0].id ?? 'google-oauth2|110932265125998815357',
      },
    });
  };

  const value = {
    color,
    colorSelectHandler,
    updateColorTypeHandler,
  };

  if (loading) return <Box />;

  return (
    <ColorCtxProvider value={value}>
      <ThemeProvider theme={customTheme ? customTheme : loadingTheme}>
        {children}
      </ThemeProvider>
    </ColorCtxProvider>
  );
};
