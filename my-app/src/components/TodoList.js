import React, {useReducer, useState} from 'react';
import {initialState, todoReducer} from '../reducers/reducers.js';

const TodoList = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState("");
    console.log(state);

  return (
    <div className="todo-list">
  <p>{state[0].item}</p>



    </div>
  );
};

export default TodoList;
