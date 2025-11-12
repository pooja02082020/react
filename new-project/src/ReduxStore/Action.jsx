
export let increment = () => {
    return {
        type: 'increment'
    }
}
// defining two actions increment and decrement
export let decrement = () => {
    return {
        type: 'decrement'
    }
}

export const bColor =(color) =>{
    return{
        type: 'setbColor',
        payload: color
    }
}
