import React from 'react';
import './App.scss';
import AddItem from './components/AddItem';
import CompleteList from './components/CompleteList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <AddItem />
      <TodoList />
      <CompleteList />
    </div>
  );
}

export default App;
