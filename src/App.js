import React from 'react';
import './App.scss';
import AddItem from './components/AddItem';
import CompleteList from './components/CompleteList';
import TodoList from './components/TodoList';
// redux-store
import { Provider } from 'react-redux';
import store from './store'
// redux-persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <AddItem />
          <TodoList />
          <CompleteList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
