import React from 'react';
import './App.scss';
import AddItem from './components/AddItem';
import CompleteList from './components/CompleteList';
import TodoList from './components/TodoList';
// redux-store
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <AddItem />
        <TodoList />
        <CompleteList />
      </div>
    </Provider>
  );
}

export default App;
