/* jshint esversion: 6 */

export const initialState = [

  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Use reducers',
    completed: false,
    id: 3892987588
  },
  {
    item: 'Teach reducers',
    completed: false,
    id: 3892987587
  },

];

export const todoReducer = (state, action) => {
  // if (action.type === "TOGGLE_EDIT") {
  //   return {
  //     ...state,
  //     editing: !state.editing
  //   };
  // }
  // if (action.type === "UPDATE_TITLE") {
  //   return {
  //     ...state,
  //     title: action.payload,
  //     editing: false
  //   };
  // } else {
  //   return state;
  // }
/*  switch (action.type) {
    case "TOGGLE_EDIT":
      return {
        ...state,
        editing: !state.editing
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    default: */
      return state;
  
};
