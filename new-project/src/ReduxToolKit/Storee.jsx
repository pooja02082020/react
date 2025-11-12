import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './CounterSlice'
import userReducer from './userSlice'



const Storee = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer

    }
});

export default Storee