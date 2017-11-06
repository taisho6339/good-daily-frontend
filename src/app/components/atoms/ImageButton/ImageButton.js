import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import './ImageButton.scss';

function ImageButton(props) {
  const {
    imageUrl,
    className,
    onClick,
  } = props;
  return (
    <IconButton
      className={className}
      onClick={onClick}
      style={
        {
          height: null, width: null,
        }
      }
    >
      <img
        styleName="image"
        alt={imageUrl}
        src={imageUrl}
      />
    </IconButton>
  );
}

ImageButton.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ImageButton.defaultProps = {
  onClick: () => {
  },
  className: null,
};

export default ImageButton;
