import React from "react";
import { render } from "react-dom";
import { useSelector, useDispatch, Provider } from "react-redux";
import store from './store';

const Title = props => {
  const title = useSelector(store => store.title);
  return <div>{title}</div>;
};

const Form = props => {
  const title = useSelector(store => store.title);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={title}
        onChange={event => dispatch({ type: "updateTitle", event })}
      />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Title />
      <Form />
    </Provider>
  );
};

render(<App />, document.getElementById("app"));