import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todoSlice';

const persistConfig = {
  key: 'todo',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const todoStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const todoPersistor = persistStore(todoStore);

export type TodoRootState = ReturnType<typeof todoStore.getState>;
export type TodoAppDispatch = typeof todoStore.dispatch;