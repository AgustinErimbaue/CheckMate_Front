import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/imagen-app.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Check Mate Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        {!user ?(
          <>
            <Link to="/Login">Iniciar Sesión</Link>
            <Link to="/Register">Registrarse</Link>
          </>
        ): (<Link to="/">Tareas</Link>)}
      </nav>
    </header>
  );
};

export default Header;
