import { TodoState, TodoAction } from './type';

export const initialState: TodoState = {
  title: '',
  urgency: 'week',
  category: '',
  workload: 1,
};

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
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload.category,
      };
    case 'SET_WORKLOAD':
      return {
        ...state,
        workload: action.payload.workload,
      };
    default:
      return state;
  }
};
