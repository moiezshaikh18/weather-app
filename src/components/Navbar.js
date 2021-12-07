import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
      </ul>
    </>
  );
}
