import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>This page is not found</p>
    </div>
  );
};
export default ErrorMessage;
