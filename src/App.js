import { useState } from 'react';
import './App.css';
import Task from './task';
import ToDoForm from './ToDoForm';
import ToDoFooter from './ToDoFooter';


function App() {

  const [showChekt, cahngeChekt] =  useState([
    {id: 0, description: "Go to school", situation: false},
    {id: 2, description: "Go to home", situation: false},
  ]);


  return (
    <div className="App">
      <ToDoForm onAdd={(text) => {
        cahngeChekt([
          ...showChekt,
          {
            id: Math.random(),
            description: text,
            situation: false,
          }
        ])
      }}/>
      <Task 
      todo={showChekt} 
      onDelet={(todo) => {
        cahngeChekt(showChekt.filter((t) => t.id !== todo.id ));
      }} 
      onChange={(newTodo) => {
        cahngeChekt(
          showChekt.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo;
            }
            return todo
          }))
      }} 
      />
      <ToDoFooter todos={showChekt} onClearArr={() => {
        cahngeChekt(showChekt.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
