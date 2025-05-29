import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Check Mate</h1>
      <nav className={styles.nav}>
        <Link to="/">Tareas</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Registrarse</Link>
      </nav>
    </header>
  );
};

export default Header;
