import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import issues from "./data/issues.csv";
import { csv } from "d3-fetch";
import 'purecss'
import sumAll from './helper/getSummed'

const render = async () => {
  const init = await csv(issues);
  const data = sumAll(init);
  ReactDOM.render(<App data={data} />, document.getElementById("root"));
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
