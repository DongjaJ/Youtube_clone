import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        {/* <img></img> */}
        <h1>Youtube</h1>
      </Link>
      <form>
        <input type="text" />
        <Link to="/videos/bts">
          <button>search</button>
        </Link>
      </form>
    </div>
  );
}
