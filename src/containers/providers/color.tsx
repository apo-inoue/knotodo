import React, { FC, useState, useCallback } from 'react';
import { ColorCtxProvider } from '../contexts/color';
import { useUserColorQuery, Color_Enum } from '../../types/graphql';
import { ThemeProvider } from 'styled-components/native';
import { baseTheme } from '../../theme/theme';
import { useUpdateUserColorMutation } from '../../types/graphql';
import { USER_COLOR } from '../../graphql/query/users';
import { colorConstants } from '../../theme/color';
import { useAuthCtx } from '../contexts/auth';
import { ScreenLoader } from '../../ui/utils/Loader';

export const ColorProvider: FC = ({ children }) => {
  const {
    state: {
      userInfo: { id },
      token,
    },
  } = useAuthCtx();

  const [color, setColor] = useState<Color_Enum>('DEFAULT');

  const { data } = useUserColorQuery();
  const fetchedColorType = data?.users[0]?.color ?? 'NULL';
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
      light: '#dddddd',
      main: '#dddddd',
      dark: '#dddddd',
    },
  };

  const colorSelectHandler = useCallback((newColor: Color_Enum) => {
    setColor(newColor);
  }, []);

  const [updateColorType, { loading }] = useUpdateUserColorMutation({
    refetchQueries: [{ query: USER_COLOR }],
  });
  const updateColorTypeHandler = () => {
    return updateColorType({
      variables: {
        color: color,
        _eq: id,
      },
    });
  };

  const value = {
    color,
    colorSelectHandler,
    updateColorTypeHandler,
  };

  if (loading) {
    return <ScreenLoader />;
  }

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
