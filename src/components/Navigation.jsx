import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
