import { createSlice } from "@reduxjs/toolkit";

const initialState={

    todoList:[],
}

export const todoSlice = createSlice({

    name:'todo',
    initialState,
    reducers:{
        addItem: (state,action) => {
             
            state.todoList = [...state.todoList, action.payload];
        },
        removeItem: (state,action) => {
            const newState = state.todoList.filter((item) => item.id !== action.payload)
            state.todoList = newState;
        },
        updateList: (state, action) => {
            state.todoList = action.payload;
        },
        resetList : (state, action) => {
            state.todoList = [];
        }
    }

});

export const {addItem, removeItem, updateList, resetList} = todoSlice.actions;

export const selectList = (state) => state.todo.todoList;
export const selectListLength = (state) => state.todo.todoList.length;

export default todoSlice.reducer;