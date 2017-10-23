import React from 'react';
import PropTypes from 'prop-types';
import './NoteLabel.scss';

function NoteLabel(props) {
  const { text, className } = props;
  return (
    <small
      styleName="note"
      className={className}
    >
      {text}
    </small>
  );
}

NoteLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

NoteLabel.defaultProps = {
  className: null,
};

export default NoteLabel;
