import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UIVideo.module.css';
import { useEffect, useRef } from 'react';

const UIVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <>
      <video
        className={cn(styles.video, classes)}
        loop
        autoPlay
        muted
        ref={videoRef}
      >
        <source src={src} />
      </video>
    </>
  );
};

UIVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UIVideo;
