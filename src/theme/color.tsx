import { Color_Enum } from '../types/graphql';

export type ColorType = {
  id: number;
  color: Color_Enum;
  hex: {
    light: string;
    main: string;
    dark: string;
  };
};
export type ColorsType = {
  id: number;
  color: Color_Enum | 'NULL';
  hex: {
    light: string;
    main: string;
    dark: string;
  };
};

export const colorConstant: ColorType[] = [
  {
    id: 1,
    color: 'DEFAULT',
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
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
    },
  },
  {
    id: 3,
    color: 'GREEN',
    hex: {
      light: '#48a999',
      main: '#00796b',
      dark: '#004c40',
    },
  },
  {
    id: 4,
    color: 'ORANGE',
    hex: {
      light: '#ff6434',
      main: '#dd2c00',
      dark: '#a30000',
    },
  },
  {
    id: 5,
    color: 'PINK',
    hex: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
    },
  },
  {
    id: 6,
    color: 'GREY',
    hex: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
    },
  },
];

export const colorConstants: ColorsType[] = [
  ...colorConstant,
  {
    id: 7,
    color: 'NULL',
    hex: {
      light: '#dddddd',
      main: '#dddddd',
      dark: '#dddddd',
    },
  },
];
