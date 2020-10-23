import { Color_Enum } from '../../types/graphql';

export type ColorCtxType = {
  color: Color_Enum;
  colorSelectHandler: (color: Color_Enum) => void;
  updateColorTypeHandler: () => void;
};
