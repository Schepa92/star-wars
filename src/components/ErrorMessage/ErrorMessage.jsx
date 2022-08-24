import UIVideo from '@ui/UIVideo';
import video from './video/han-solo.mp4';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles.text}>
      <h2>ERROR!</h2>
      <p>This page is not found</p>
      <UIVideo src={video} classes={styles.video} playbackRate={1} />
    </div>
  );
};
export default ErrorMessage;
