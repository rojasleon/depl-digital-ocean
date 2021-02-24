import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <>
      <h1>OtherPage</h1>
      <Link style={{ color: 'yellow' }} to="/">
        Home
      </Link>
    </>
  );
};

export default OtherPage;
