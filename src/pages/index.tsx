import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Hello from Home</h1>
      <Link style={{ color: 'yellow' }} to="/other-page">
        Other Page
      </Link>
    </>
  );
};

export default Home;
