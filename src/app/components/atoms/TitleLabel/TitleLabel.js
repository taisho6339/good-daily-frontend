import React from 'react';
import PropTypes from 'prop-types';
import './TitleLabel.scss';

function TitleLabel(props) {
  const { text, className } = props;
  return (
    <div className={className}>
      <p styleName="text-label">
        {text}
      </p>
    </div>
  );
}

TitleLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TitleLabel.defaultProps = {
  className: null,
};

export default TitleLabel;
