import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { id: Date.now(), text: action.text };
      return [...state, newToDoObj];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const dispatchDelToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch({ type: DEL_TODO, id });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  store.dispatch(dispatchAddToDo(todo));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEacth((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDelToDo(todo));
    btn.innerText = "Del";
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subsribe(paintToDo);
form.addEventListener("submit", handleSubmit);
