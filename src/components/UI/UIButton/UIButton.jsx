import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UIButton.module.css';
import '../index.css';

const UIButton = ({ text, onClick, disabled, theme = 'dark' }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(styles.button, styles[theme])}
        disabled={disabled}
        theme='dark'
      >
        {text}
      </button>
    </>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UIButton;
