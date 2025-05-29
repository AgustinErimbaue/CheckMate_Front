import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Check Mate</h1>
      <ul>
        <Link to="/">Tareas</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Registrarse</Link>
      </ul>
    </>
  );
};

export default Header;
