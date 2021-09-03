import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    del: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDo.reducer });

export const { add, del } = toDo.actions;

export default store;
