import { useDispatch } from "react-redux";
import { startLogin } from "store/auth";

import styles from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(e.target.username.value);
  };

  const handleLogin = (username) => {
    dispatch(startLogin(username));
  };

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <p>Bienvenido!</p>
        <br />
        <form onSubmit={handleForm}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <br />
          <button>Login</button>
        </form>
      </header>
    </div>
  );
};
