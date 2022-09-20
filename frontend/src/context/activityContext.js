import { createContext, useReducer } from 'react';

export const ActivityContext = createContext();

export const activityReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return {
        activityList: action.payload,
      };
    case 'CREATE_ACTIVITY':
      return {
        activityList: [action.payload, ...state.activityList],
      };
    case 'DELETE_ACTIVITY':
      return {
        activityList: state.activityList.filter((activity) => {
          return activity._id !== action.payload._id;
        }),
      };
    default:
      return state;
  }
};

export const ActivityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, { activityList: [] });

  return (
    <ActivityContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};
