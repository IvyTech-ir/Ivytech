import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
export var store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
