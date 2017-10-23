import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import './GenderSelect.scss';
import female from './asstes/female.png';
import male from './asstes/male.png';
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
        <img
          styleName="gender-icon"
          src={male}
          alt="male"
        />
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

// AccountRegister.propTypes = {
//   children: PropTypes.node
// };

