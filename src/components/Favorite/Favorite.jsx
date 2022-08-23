import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import icon from './img/mark.png';

import styles from './Favorite.module.css';
import { useEffect, useState } from 'react';

const Favorite = () => {
  const [count, setCount] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
  });
  return (
    <>
      <div className={styles.container}>
        <Link to='/favorites'>
          <img src={icon} alt='Favorites' className={styles.icon} />
          <span className={styles.counter}>{count}</span>
        </Link>
      </div>
    </>
  );
};

export default Favorite;
