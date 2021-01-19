import logo from "images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "store/auth";

import styles from "./Home.module.css";

export const Home = () => {
  const { name, html_url } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/components/Home.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <br />
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
};
