import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextLabel.scss';

function TextLabel(props) {
  const { text, className } = props;
  return (
    <p styleName={classNames('text-label', className)}>{text}</p>
  );
}

TextLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextLabel.defaultProps = {
  className: null,
};

export default TextLabel;
