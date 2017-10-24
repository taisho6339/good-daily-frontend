import React from 'react';
import PropTypes from 'prop-types';
import female from '../../../constants/assets/female.png';
import male from '../../../constants/assets/male.png';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import RaisedImageButton from '../RaisedImageButton/RaisedImageButton';
import './GenderSelect.scss';

const imageButtonStyle = {
  width: '200px',
  height: '240px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

function GenderSelect(props) {
  const { onSelected } = props;
  return (
    <div>
      <TitleLabel
        styleName="title"
        text="あなたの性別を教えてください"
      />
      <div styleName="gender-icon-container">
        <RaisedImageButton
          onClick={() => onSelected('MALE')}
          styles={imageButtonStyle}
          imageUrl={male}
        />
        <RaisedImageButton
          onClick={() => onSelected('FEMALE')}
          styles={imageButtonStyle}
          imageUrl={female}
        />
      </div>
    </div>
  );
}

GenderSelect.propTypes = {
  onSelected: PropTypes.func,
};
GenderSelect.defaultProps = {
  onSelected: () => {
  },
};

export default GenderSelect;
