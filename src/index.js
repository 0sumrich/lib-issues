import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import issues from "./data/issues.csv";
import { csv } from "d3-fetch";
import 'purecss'

const render = async () => {
  const data = await csv(issues);
  ReactDOM.render(<App data={data} />, document.getElementById("root"));
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
