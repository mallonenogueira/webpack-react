import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import "base.css";

// import("components/App").then(({ default: App }) => renderReactApp(App));

function renderReactApp(Application) {
  ReactDOM.render(<Application />, document.querySelector("#root"));
}

renderReactApp(App);
