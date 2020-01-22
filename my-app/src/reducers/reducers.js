/* jshint esversion: 6 */

export const initialState = [

  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },

];

export const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_TODO':
          return [
            ...state,
            {item: action.payload,
            completed: false,
            id: Date.now()}
          ]

        case 'TOGGLE_COMPLETE':
          const toggleComplete = state.map(todo => {
            if(action.payload === todo.id) {
              return {...todo, completed: !todo.completed}
            } else {
              return todo;
            }
          })
          return toggleComplete;

        case 'CLEAR_COMPLETE':
          const clearCompleted = state.filter(todo => todo.completed === false)
          return clearCompleted;
    default:
      return state;
  }
};
