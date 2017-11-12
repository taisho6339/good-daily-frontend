import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import female from '../../../constants/assets/female.png';
import male from '../../../constants/assets/male.png';
import ImageButton from '../../atoms/ImageButton/ImageButton';
import TitleLabel from '../../atoms/TitleLabel/TitleLabel';
import './GenderSelect.scss';

function GenderSelect(props) {
  const { onSelected, className } = props;
  return (
    <Card
      className={className}
      styleName="gender-icon-container"
    >
      <TitleLabel text="あなたの性別を教えてください" />
      <ImageButton
        styleName="male-icon"
        onClick={() => onSelected('MALE')}
        imageUrl={male}
      />
      <ImageButton
        styleName="female-icon"
        onClick={() => onSelected('FEMALE')}
        imageUrl={female}
      />
    </Card>
  );
}

GenderSelect.propTypes = {
  onSelected: PropTypes.func,
  className: PropTypes.string,
};
GenderSelect.defaultProps = {
  onSelected: () => {
  },
  className: null,
};

export default GenderSelect;

