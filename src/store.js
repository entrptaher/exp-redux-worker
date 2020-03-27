import { createStore } from "redux";

const reducer = (state = { title: "Hello Redux" }, action) => {
  switch (action.type) {
    case "updateTitle":
      state.title = action.event.target.value;
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;