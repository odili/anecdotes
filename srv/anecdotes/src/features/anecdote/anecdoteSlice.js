import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../../services/anecdote';

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    vote: (state, action) => {
      state[state.findIndex(anec => anec.id === action.payload.id)].votes += 1;
    },
    newAnecdote: (state, action) => {
      state.push(action.payload);
    },
    initAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { vote, newAnecdote, initAnecdotes } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.create(content);
    dispatch(newAnecdote(anecdote));
  };
};

export const upVote = (id, anecdote) => {
  return async dispatch => {
    const upvoted = await anecdoteService.vote(id, anecdote);
    dispatch(vote({ id: upvoted.id }));
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    // console.log(anecdotes);
    dispatch(initAnecdotes(anecdotes));
  };
};
