import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './TelNumberForm.scss';

function TelNumberForm(props) {
  const { onClickNext, onBlur } = props;
  return (
    <Card styleName="container">
      <TitleLabel text="電話番号を入力してください" />
      <TextField
        styleName="tel-input"
        name="telNumber"
        multiLine={false}
        hintText="ハイフンなし"
        onBlur={(element) => {
          onBlur(element.target.value);
        }}
      />
      <RaisedButton
        label="次へ"
        onClick={() => {
          onClickNext();
        }}
      />
    </Card>
  );
}

TelNumberForm.propTypes = {
  onClickNext: PropTypes.func,
  onBlur: PropTypes.func,
};
TelNumberForm.defaultProps = {
  onClickNext: () => {
  },
  onBlur: PropTypes.func,
};

export default TelNumberForm;
