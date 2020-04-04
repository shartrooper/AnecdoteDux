import React from 'react';
import {connect} from 'react-redux';
import { applyFilter } from '../reducers/filterReducer';

const filterForm = (props) => {

    const submitFilter = (event) => {
        event.preventDefault();
        props.applyFilter(event.target.value);
    }

    return (<div>Filter <input onChange={submitFilter} name="filter" /></div>);
}

const mapDispatchToProps = { applyFilter };

const connectedFilterForm= connect(null,mapDispatchToProps)(filterForm)

export default connectedFilterForm;