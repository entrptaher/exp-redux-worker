import React, { memo } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector, getProvider } from "react-redux-worker";

import * as actions from "./redux/actions";
const worker = new Worker("./redux/worker.js");
const ProxyProvider = getProvider(worker);

// NOTE: this component should not re-render
const StaticTitle = () => <h1>Static Text</h1>;

const Title = props => {
  const title = useSelector(store => store.title);
  return <div>{title}</div>;
};

const Form = props => {
  const title = useSelector(store => store.title);
  const dispatch = useDispatch();
  const onChange = event => dispatch(actions.updateTitle(event.target.value));
  return (
    <div>
      <input value={title} onChange={onChange} />
    </div>
  );
};

const App = () => {
  return (
    <ProxyProvider>
        <StaticTitle />
        <Title />
        <Form />
    </ProxyProvider>
  );
};

render(<App />, document.getElementById("app"));
