import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './PasswordForm.scss';

function PasswordForm(props) {
  const { onClickNext, onBlur } = props;
  return (
    <Card styleName="container">
      <TitleLabel text="パスワードを入力してください" />
      <TextField
        styleName="pass-input"
        name="password"
        multiLine={false}
        hintText="6文字以上20文字以内の英数文字"
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

PasswordForm.propTypes = {
  onClickNext: PropTypes.func,
  onBlur: PropTypes.func,
};
PasswordForm.defaultProps = {
  onClickNext: () => {
  },
  onBlur: PropTypes.func,
};

export default PasswordForm;
