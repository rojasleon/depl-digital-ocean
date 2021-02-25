import React from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
const OtherPage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "OtherPage"), /* @__PURE__ */ React.createElement(Link, {
    style: {color: "yellow"},
    to: "/"
  }, "Home"));
};
export default OtherPage;
