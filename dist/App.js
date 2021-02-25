import "./App.css.proxy.js";
import React, {Suspense, lazy} from "../_snowpack/pkg/react.js";
import {HashRouter, Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import Layout from "./components/layout.js";
const Home = lazy(() => import("./pages/index.js"));
const OtherPage = lazy(() => import("./pages/other-page.js"));
function App() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement(HashRouter, {
    basename: "/"
  }, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("div", null, "Loading...")
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/other-page",
    component: OtherPage
  })))))));
}
export default App;
