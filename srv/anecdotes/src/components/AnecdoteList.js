import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upVote } from '../features/anecdote/anecdoteSlice';
import { arrayObjectSort } from '../utils/arrayObjectSort';
import { setNotification } from '../features/notification/notificationSlice';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => state.anecdotes);
  const filter = useSelector(state => state.filter);

  const vote = id => {
    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(upVote(id, anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 10));
  };

  const filteredAnecdotes = (anecdotes, filter) => {
    // console.log(anecdotes);
    const filtered = anecdotes.filter(a => a.content.includes(filter));
    return filtered.sort(arrayObjectSort('votes', 'desc'));
  };
  return (
    <>
      {filteredAnecdotes(anecdotes, filter).map(anecdote => (
        <div key={anecdote.id} style={{ marginBottom: '1rem' }}>
          <div>{anecdote.content}</div>
          <div>
            {`has ${anecdote.votes}  `}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
