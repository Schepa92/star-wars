import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles.text}>
      <h2>ERROR!</h2>
      <p>This page is not found</p>
    </div>
  );
};
export default ErrorMessage;
