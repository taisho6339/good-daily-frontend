import React from 'react';
import PropTypes from 'prop-types';
import './TextLabel.scss';

function TextLabel(props) {
  const { text, className } = props;
  return (
    <div className={className}>
      <p styleName="text-label">
        {text}
      </p>
    </div>
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
