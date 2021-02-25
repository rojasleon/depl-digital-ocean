import React, {useEffect, useState} from "../pkg/react.js";
import logo from "../logo.svg.proxy.js";
const Layout = ({children}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("p", null, "Edit ", /* @__PURE__ */ React.createElement("code", null, "src/App.tsx"), " and save to reload."), /* @__PURE__ */ React.createElement("p", null, "Page has been open for ", /* @__PURE__ */ React.createElement("code", null, count), " seconds."), children);
};
export default Layout;
