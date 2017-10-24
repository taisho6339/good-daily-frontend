import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './BirthdaySelect.scss';

function BirthdaySelect(props) {
  const { birthday, onSelected } = props;
  return (
    <Card
      styleName="content"
    >
      <TitleLabel
        styleName="title"
        text="あなたの生年月日を教えてください"
      />
      <DatePicker
        autoOk
        floatingLabelText="生年月日"
        defaultDate={new Date(birthday)}
        onChange={(event, date) => {
          onSelected(date);
        }}
      />
    </Card>
  );
}

BirthdaySelect.propTypes = {
  onSelected: PropTypes.func,
  birthday: PropTypes.number,
};
BirthdaySelect.defaultProps = {
  onSelected: () => {
  },
  birthday: 0,
};

export default BirthdaySelect;
