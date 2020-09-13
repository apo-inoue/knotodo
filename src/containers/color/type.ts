import { ColorTypes_Enum } from '../../types/graphql';

export type ColorCtxType = {
  color: ColorTypes_Enum;
  colorSelectHandler: (color: ColorTypes_Enum) => void;
  updateColorTypeHandler: () => void;
};

export type ColorType = {
  id: number;
  color: ColorTypes_Enum;
  hex: {
    light: string;
    main: string;
    dark: string;
  };
};
