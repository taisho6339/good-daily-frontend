import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
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
const selectButtonColor = '#f8f8f8';

function GenderSelect(props) {
  const { onSelected, className } = props;
  return (
    <Card
      className={className}
      styleName="content"
    >
      <TitleLabel
        styleName="title"
        text="あなたの性別を教えてください"
      />
      <div styleName="gender-icon-container">
        <RaisedImageButton
          onClick={() => onSelected('MALE')}
          styles={imageButtonStyle}
          backgroundColor={selectButtonColor}
          imageUrl={male}
        />
        <RaisedImageButton
          onClick={() => onSelected('FEMALE')}
          styles={imageButtonStyle}
          backgroundColor={selectButtonColor}
          imageUrl={female}
        />
      </div>
    </Card>
  );
}

GenderSelect.propTypes = {
  onSelected: PropTypes.func,
  className: PropTypes.string,
};
GenderSelect.defaultProps = {
  onSelected: () => {
  },
  className: null,
};

export default GenderSelect;
