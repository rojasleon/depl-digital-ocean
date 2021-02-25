import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello from Home"), /* @__PURE__ */ React.createElement(Link, {
    style: {color: "yellow"},
    to: "/other-page"
  }, "Other Page"));
};
export default Home;
