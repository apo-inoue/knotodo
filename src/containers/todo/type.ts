import { ChangeEvent, MouseEvent } from 'react';
import { Urgency_Enum } from '../../types/graphql';
import {
  NativeSyntheticEvent,
  TextInputTextInputEventData,
} from 'react-native';

export type TodoAction =
  | { actionType: 'SET_TITLE'; payload: { title: string } }
  | { actionType: 'SET_URGENCY'; payload: { urgency: Urgency_Enum } }
  | { actionType: 'SET_CATEGORY'; payload: { category: string } }
  | { actionType: 'SET_WORKLOAD'; payload: { workload: number } };

export type TodoState = {
  title: string;
  urgency: Urgency_Enum;
  category: string;
  workload: number;
};

export type TodoCtxType = {
  state: TodoState;
  titleInputHandler: (text: string) => void;
  urgencySelectHandler: (urgency: Urgency_Enum) => void;
  categorySelectHandler: (category: string) => void;
  workloadInputHandler: (workload: number) => void;
};
