import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './MailAddressForm.scss';

function MailAddressForm(props) {
  const { onClickNext, onBlur } = props;
  return (
    <Card styleName="container">
      <TitleLabel text="メールアドレスを入力してください" />
      <div>
        <TextField
          styleName="address-input"
          name="mailAddress"
          multiLine={false}
          hintText="6文字以上20文字以内の英数字"
          onBlur={(element) => {
            onBlur(element.target.value);
          }}
        />
      </div>
      <RaisedButton
        label="次へ"
        onClick={() => {
          onClickNext();
        }}
      />
    </Card>
  );
}

MailAddressForm.propTypes = {
  onClickNext: PropTypes.func,
  onBlur: PropTypes.func,
};
MailAddressForm.defaultProps = {
  onClickNext: () => {
  },
  onBlur: () => {
  },
};

export default MailAddressForm;
