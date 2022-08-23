import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions';
import favoriteIconOn from './img/favorite-on.png';
import favoriteIconOff from './img/favorite-off.png';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img src={personPhoto} alt={personName} className={styles.photo} />
        <img
          onClick={dispatchFavoritePeople}
          src={personFavorite ? favoriteIconOn : favoriteIconOff}
          alt='Add to favorite'
          className={styles.favorite}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
