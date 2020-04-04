const NEW_MESSAGE = "NEW_MESSAGE";

export const switchMessage = (message, visible= '') => {
    return ({ type: NEW_MESSAGE, data: { message, visible } })
}

const notificationReducer = (state = { message: "Awaiting for your action", visible: 'none' }, action) => {
    switch (action.type) {
        case 'NEW_MESSAGE':
            return action.data
        default:
            break;
    }
    return state;
}

export default notificationReducer;
