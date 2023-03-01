import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", background: "black", color: "white", borderRadius: "10px", padding: "20px 40px", marginBottom: "10px"}}>
      <h2>GoJai</h2>
      <ul style={{display: "flex", gap: 20, listStyle: "none"}}> 
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
