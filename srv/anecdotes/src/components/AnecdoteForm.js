import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../features/anecdote/anecdoteSlice';
import { setNotification } from '../features/notification/notificationSlice';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    dispatch(createAnecdote(content));
    dispatch(setNotification(`"${content}" added !`, 6));
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
