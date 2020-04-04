import React from 'react';
import {connect} from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { switchMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const submitAnecdote = (event) => {
        event.preventDefault();
        const toSubmit={content: event.target.anecdote.value, votes:0}
        event.target.anecdote.value = '';
        props.addAnecdote(toSubmit);
        props.switchMessage(`You created '${toSubmit.content}'`);
    }

    return (
        <form onSubmit={submitAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>);
}

const mapDispatchToProps= {addAnecdote,switchMessage};

const connectedAnecdoteForm= connect(null,mapDispatchToProps)(AnecdoteForm);

export default connectedAnecdoteForm;