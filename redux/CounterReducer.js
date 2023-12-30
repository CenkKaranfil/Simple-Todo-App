import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}


const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseVal: (state,action) => {
            state.value += action.payload;
        },
        decreaseVal: (state,action) => {
            state.value -= action.payload;
        },
        resetVal: (state) => {
            state.value = 0;
        }
    }

})

export const {increaseVal,decreaseVal,resetVal} = CounterSlice.actions;

export const value = (state) => state.counter.value;
export default CounterSlice.reducer;