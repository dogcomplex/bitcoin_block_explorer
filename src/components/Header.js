import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default () => (
  <nav>
    <div className="link-buttons">
      <Link to="/">Home</Link>
      <Link to={`/blocks/genesis`}>Genesis Block</Link>
	  <Link to={`/blocks/latest`}>Latest Block</Link>
    </div>
  </nav>
);
