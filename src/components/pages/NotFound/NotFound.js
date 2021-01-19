import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <p>404 - Not Found</p>
      </header>
    </div>
  );
};
