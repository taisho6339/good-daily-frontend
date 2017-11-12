import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './PostalCodeForm.scss';

function PostalCodeForm(props) {
  const { onClickNext, onBlur } = props;
  return (
    <Card styleName="container">
      <TitleLabel text="郵便番号を入力してください" />
      <TextField
        styleName="code-input"
        name="postalCode"
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

PostalCodeForm.propTypes = {
  onClickNext: PropTypes.func,
  onBlur: PropTypes.func,
};
PostalCodeForm.defaultProps = {
  onClickNext: () => {
  },
  onBlur: PropTypes.func,
};

export default PostalCodeForm;
