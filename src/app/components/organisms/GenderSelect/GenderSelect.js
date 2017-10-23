import React from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './GenderSelect.scss';
import female from '../../../constants/assets/female.png';
import male from '../../../constants/assets/male.png';
import TitleLabel from '../../atoms/TitleLabel';

function GenderSelect() {
  return (
    <Card
      styleName="content"
    >
      <TitleLabel
        styleName="title"
        text="あなたの性別を教えてください"
      />
      <div styleName="gender-icon-container">
        <RaisedButton
          styleName="gender-icon"
        >
          <img
            styleName="gender-icon"
            src={male}
            alt="male"
          />
        </RaisedButton>
        <img
          styleName="gender-icon"
          src={female}
          alt="female"
        />
      </div>
    </Card>
  );
}

export default GenderSelect;
