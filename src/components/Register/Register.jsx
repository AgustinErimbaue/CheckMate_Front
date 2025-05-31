import { useState } from "react";
import styles from "./Register.module.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
const Register = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { username, email, password, confirmPassword } = formData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.name = "El nombre de usuario es obligatorio.";
    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!password.trim()) newErrors.password = "La contraseña es obligatoria.";
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formulario enviado:", formData);
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Nombre de usuario"
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar contraseña"
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword}</p>
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
