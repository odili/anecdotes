import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './features/anecdote/anecdoteSlice';
import filterReducer from './features/filter/filterSlice';
import notificationReducer from './features/notification/notificationSlice';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});

export default store;
