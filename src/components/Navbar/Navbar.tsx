import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/todo">TodoRedux</NavLink>
          </li>
          <li>
            <NavLink to="/user">User List</NavLink>
          </li>
          <li>
            <NavLink to="/count">Count</NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>
          <li>
            <NavLink to="/crypto">Crypto API</NavLink>
          </li>
          <li>
            <NavLink to="/click">Clicked</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
