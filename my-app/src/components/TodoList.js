import React, {useReducer, useState} from 'react';
import {initialState, todoReducer} from '../reducers/reducers.js';
import ToDoForm from './Todo';

const TodoList = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState("");
    console.log(state);

    const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-list">
    <h1 className='title'>To-Do List</h1>
       <div>
         <input
           type='text'
           name='newNoteText'
           value={newTodo}
           onChange={handleChanges}
           placeholder='add-todo-item'
         />
         <button
           onClick={() => {
             dispatch({ type: 'ADD_TODO', payload: newTodo})
           }}
         >Add To-do</button>
         <button
           onClick={() => {
             dispatch({ type: 'CLEAR_COMPLETE'})
           }}
         >Clear List</button>
       </div>
     <div>
           {state.map(todo => (
             <ToDoForm
             dispatch={dispatch}
             item={todo.item}
             completed={todo.completed}
             id={todo.id}
             />
           ))
         }
       </div>


    </div>
  );
};

export default TodoList;
