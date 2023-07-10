import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li className="nav-item p-2">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Sign Up</NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
