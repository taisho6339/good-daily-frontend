import React from 'react';
import { Card } from 'material-ui/Card';
import female from '../../../constants/assets/female.png';
import male from '../../../constants/assets/male.png';
import TitleLabel from '../../atoms/TitleLabel';
import RaisedImageButton from '../../molecules/RaisedImageButton/RaisedImageButton';
import './GenderSelect.scss';

const imageButtonStyle = {
  width: '200px',
  height: '240px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

function GenderSelect() {
  return (
    <Card styleName="content">
      <TitleLabel
        styleName="title"
        text="あなたの性別を教えてください"
      />
      <div styleName="gender-icon-container">
        <RaisedImageButton
          styles={imageButtonStyle}
          imageUrl={male}
        />
        <RaisedImageButton
          styles={imageButtonStyle}
          imageUrl={female}
        />
      </div>
    </Card>
  );
}

export default GenderSelect;
