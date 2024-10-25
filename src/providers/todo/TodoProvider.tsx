import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { todoStore, todoPersistor } from '@/stores/todo/todoStore';

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={todoStore}>
      <PersistGate loading={null} persistor={todoPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}