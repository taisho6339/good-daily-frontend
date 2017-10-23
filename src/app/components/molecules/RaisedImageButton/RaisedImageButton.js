import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './RaisedImageButton.scss';

function RaisedImageButton(props) {
  const { imageUrl, styles, onClick } = props;
  return (
    <RaisedButton
      style={styles}
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
  styles: PropTypes.object,
  onClick: PropTypes.func,
};

RaisedImageButton.defaultProps = {
  styles: null,
  onClick: () => {
  },
};

export default RaisedImageButton;
