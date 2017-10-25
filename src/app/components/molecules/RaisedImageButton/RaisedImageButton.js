import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './RaisedImageButton.scss';

function RaisedImageButton(props) {
  const {
    imageUrl,
    styles,
    onClick,
    backgroundColor,
  } = props;
  return (
    <RaisedButton
      style={styles}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <img
        styleName="image"
        alt={imageUrl}
        src={imageUrl}
      />
    </RaisedButton>
  );
}

RaisedImageButton.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  styles: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

RaisedImageButton.defaultProps = {
  styles: null,
  backgroundColor: null,
  onClick: () => {
  },
};

export default RaisedImageButton;
