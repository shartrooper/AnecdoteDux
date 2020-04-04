/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/

import anecdoteService from '../services/anecdotes'

const NEW_VOTE = "NEW_VOTE";
const NEW_OBJECT = "NEW_OBJECT";

/*const getId = () => (100000 * Math.random()).toFixed(0)*/

/*const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}*/


export const addVote = (anecdote) => {

  return async dispatch => {
    let toUpdate={...anecdote, votes: anecdote.votes+1}
    const updatedAnecdote= await anecdoteService.updateObject(toUpdate);
    dispatch({
      type: NEW_VOTE,
      data: updatedAnecdote
    });
  }
}

export const addAnecdote = (anecdote) => {

  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: NEW_OBJECT,
      data: newAnecdote
    });
  }
}

export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    });
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_VOTE':
      return [...state.filter((anecdote) => anecdote.id !== action.data.id), action.data];
    case 'NEW_OBJECT':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      break;
  }
  return state
}



export default anecdoteReducer