let countReducer = (state = 40, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }

    //receives action from dispatch
}

export default countReducer