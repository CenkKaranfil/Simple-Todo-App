import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoReducer";
import CounterReducer from "./CounterReducer";

export const store = configureStore({
    reducer: {
        todo: TodoReducer,
        counter: CounterReducer
    },
});