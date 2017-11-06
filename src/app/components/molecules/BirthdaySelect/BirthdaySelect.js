import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import './BirthdaySelect.scss';

function BirthdaySelect(props) {
  const { birthday, onSelected, onClickNext } = props;
  return (
    <Card
      styleName="container"
    >
      <DatePicker
        styleName="date-picker"
        autoOk
        floatingLabelText="生年月日"
        defaultDate={new Date(birthday)}
        onChange={(event, date) => {
          onSelected(date);
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

BirthdaySelect.propTypes = {
  onSelected: PropTypes.func,
  onClickNext: PropTypes.func,
  birthday: PropTypes.number,
};
BirthdaySelect.defaultProps = {
  onSelected: () => {
  },
  onClickNext: () => {
  },
  birthday: 0,
};

export default BirthdaySelect;
