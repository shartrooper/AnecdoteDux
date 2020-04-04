import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initialAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'

const App = (props) => {
  
  useEffect(() => {
    props.initialAnecdotes()
  }, [props])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>Create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initialAnecdotes })(App)