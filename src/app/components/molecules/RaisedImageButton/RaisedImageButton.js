import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './RaisedImageButton.scss';

function RaisedImageButton(props) {
  const { imageUrl, styles } = props;
  return (
    <RaisedButton style={styles}>
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
};

RaisedImageButton.defaultProps = {
  styles: null,
};

export default RaisedImageButton;
