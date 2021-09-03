import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const delToDo = createAction("DEL");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [delTodo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
  },
});

const store = configureStore(reducer);

export const actionCreators = {
  addToDo,
  delToDo,
};

export default store;
