import styles from './App.module.css';
import { getApiResource } from '../../utils/network';

const App = () => {
  return (
    <div>
      <h1 className={styles.header}>Hello!</h1>
    </div>
  );
};

export default App;
