const NEW_FILTER= 'NEW_FILTER';

export const applyFilter= (filter) =>{ return ({type: NEW_FILTER, data: filter})};

const filterReducer= (state= '', action)=>{
    switch (action.type) {
        case NEW_FILTER:
            return action.data
        default:
            break;
    }
    return state;
}

export default filterReducer;