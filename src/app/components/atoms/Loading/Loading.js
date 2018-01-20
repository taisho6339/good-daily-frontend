import React from 'react';
import PropTypes from 'prop-types';
import loading from '../../../constants/assets/loading.svg';
import './Loading.scss';

function Loading({ className }) {
  return (
    <img
      className={className}
      src={`/${loading}`}
      alt={loading}
    />
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: null,
};


export default Loading;
