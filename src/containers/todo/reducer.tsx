import { TodoState, TodoAction } from './type';

export const initialState: TodoState = { title: '', urgency: 'today' };

export const todoReducer: (
  state: TodoState,
  action: TodoAction,
) => TodoState = (state, action) => {
  switch (action.actionType) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload.title,
      };
    case 'SET_URGENCY':
      return {
        ...state,
        urgency: action.payload.urgency,
      };
  }
};
