import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/imagen-app.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Check Mate Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        {!user ? (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/Register">Registrarse</Link>
          </>
        ) : (
          <>
            <Link to="/Task">Tareas</Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Cerrar Sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
