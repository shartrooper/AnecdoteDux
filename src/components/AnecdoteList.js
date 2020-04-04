import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import Filter from './filterForm'
import { switchMessage } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {

    const vote = (anecdote) => {
        props.addVote(anecdote);
        props.switchMessage(`You voted '${anecdote.content}'`);
    }

    return (<div id='list'>
        <Filter />
        {props.visibleAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        )
        }</div>
    );
}


const filteredAnecdotes = ({ anecdote, filter }) => {

    const anecdotes = anecdote.sort((a, b) => b.votes - a.votes);

    const filterArr = (exp) => {

        let regex = new RegExp(exp, 'gi');

        return (anecdotes.filter((anecdote) => regex.test(anecdote.content)))
    }

    return !filter ? anecdotes : filterArr(filter);

}


const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
        visibleAnecdotes: filteredAnecdotes(state)
    }
}


const mapDispatchToProps = { addVote, switchMessage };


const connectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

export default connectedAnecdotes;