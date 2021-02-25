import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';

const Layout: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
      {children}
    </>
  );
};

export default Layout;
