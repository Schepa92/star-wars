import cn from 'classnames';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={cn(styles.header, styles.text)}>Hello!</h1>
    </div>
  );
};

export default App;
