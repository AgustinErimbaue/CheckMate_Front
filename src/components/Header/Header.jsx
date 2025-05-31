import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/imagen-app.png"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Check Mate Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <Link to="/">Tareas</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Registrarse</Link>
      </nav>
    </header>
  );
};

export default Header;
