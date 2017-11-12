import React from 'react';
import { Card } from 'material-ui/Card';
import ImageButton from '../../atoms/ImageButton/ImageButton';
import TextLabel from '../../atoms/TextLabel/TextLabel';
import './RegistrationComplete.scss';
import doneIcon from '../../../constants/assets/ic_done.png';

function RegistrationComplete() {
  return (
    <Card styleName="container">
      <TextLabel text="登録が完了しました" />
      <TextLabel text="本登録メールを確認して" />
      <TextLabel text="記載のURLをクリックしてください" />
      <ImageButton
        styleName="icon"
        imageUrl={doneIcon}
      />
    </Card>
  );
}

export default RegistrationComplete;
