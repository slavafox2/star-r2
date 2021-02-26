import React from "react";
import {Link} from "react-router-dom";

import "./header.css";

const Header = (props) => {
  const buttonChangeService = props.buttonChangeService;
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Star DB</Link>
      </h3>
      <ul className="d-flex">
        <li>
        <Link to="/people/">People</Link>
          {/* <a href="#">People</a> */}
        </li>
        <li>
          <Link to="/planet/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li> 
        <li>
          <Link to="/login">Login</Link>
        </li>
         <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={buttonChangeService}>
        Change Service
      </button>
    </div>
  );
};

export default Header;
