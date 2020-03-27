import { createStore } from "redux";
import { expose, createProxyStore } from 'react-redux-worker'

const reducer = (state = { title: "Edit Me" }, action) => {
  switch (action.type) {
    case "updateTitle":
      return {
        ...state,
        title: action.value,
      }
    default:
      return state;
  }
};

const store = createStore(reducer);
const proxyStore = createProxyStore(store)
expose(proxyStore, self);
export default store;