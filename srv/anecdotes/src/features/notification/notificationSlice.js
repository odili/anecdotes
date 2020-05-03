import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    notify: (state, action) => {
      return action.payload;
    },
    clear: () => null,
  },
});

export const { notify, clear } = notificationSlice.actions;

export default notificationSlice.reducer;

export const setNotification = (message, delay = 5) => {
  const timeout = secs => {
    return new Promise(resolve => setTimeout(resolve, secs * 1000));
  };
  return async dispatch => {
    dispatch(notify(message));
    await timeout(delay);
    dispatch(clear());
  };
};
