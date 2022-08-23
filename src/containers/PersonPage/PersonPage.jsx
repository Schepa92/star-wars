import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { API_PERSON } from '@constants/api';

import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UILoading from '@components/UI/UILoading';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms')
);

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPersonInfo([
          {
            title: 'Height',
            data: res.height,
          },
          {
            title: 'Mass',
            data: res.mass,
          },
          {
            title: 'Hair color',
            data: res.hair_color,
          },
          {
            title: 'Skin color',
            data: res.skin_color,
          },
          {
            title: 'Birth year',
            data: res.birth_year,
          },
          {
            title: 'Gender',
            data: res.gender,
          },
          {
            title: 'Eye color',
            data: res.eye_color,
          },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, setErrorApi]);
  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={id}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
