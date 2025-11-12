const colorReducer = (state={backgroundColor : 'green'}, action)=>{
    switch(action.type){
        case 'setbColor':
        return{backgroundColor:action.payload}
        default:
            return state;
    }
}

export default colorReducer