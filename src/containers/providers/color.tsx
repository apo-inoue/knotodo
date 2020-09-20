import React, { useState, useCallback } from 'react';
import { ColorCtxProvider } from '../contexts/color';
import { useGetColorTypeQuery } from '../../types/graphql';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from '../../theme/theme';
import { useUpdateColorTypeMutation } from '../../types/graphql';
import { GET_COLOR_TYPE } from '../../graphql/query/users';
import { Box } from '../../ui/layout/Box';
import { colorConstants } from '../../theme/color';
import { useAuthContext } from '../contexts/auth';

export const ColorProvider: FC = ({ children }) => {
  const {
    state: { token },
  } = useAuthContext();

  const { data } = useGetColorTypeQuery();
  const fetchedColorType = data?.users[0].color_type;
  const fetchedColorPalette =
    fetchedColorType &&
    colorConstants.find(colorConstant => {
      return colorConstant.color === fetchedColorType;
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
  const colorSelectHandler = useCallback((newColor: ColorTypes_Enum) => {
    setColor(newColor);
  }, []);

  const [
    updateColorType,
    { error, loading, data: mData },
  ] = useUpdateColorTypeMutation({
    refetchQueries: [{ query: GET_COLOR_TYPE }],
  });
  console.log(error, loading, mData, color);
  const updateColorTypeHandler = () => {
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
      {token ? (
        <ThemeProvider theme={customTheme ? customTheme : loadingTheme}>
          {children}
        </ThemeProvider>
      ) : (
        children
      )}
    </ColorCtxProvider>
  );
};
