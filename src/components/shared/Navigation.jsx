import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/state">State</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/effect">Effect</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/ref">Ref</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/memo">Memo</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/context">Context</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/local-data">
          Local Data
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/remote-data">
          Remote Data
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;