import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import SwipeableViews from 'react-swipeable-views';
import { updateRegistrationForm } from '../../../redux/actions/registrationAction';
import GenderSelect from '../../molecules/GenderSelect/GenderSelect';
import BirthdaySelect from '../../molecules/BirthdaySelect/BirthdaySelect';
import './RegistrationStepper.scss';

const INDEX_GENDER = 0;
const INDEX_BIRTHDAY = 1;
const INDEX_POSTAL_CODE = 2;
const INDEX_TEL_MAIL = 3;

const REGISTRATION_STEPS = [
  {
    index: INDEX_GENDER,
    label: '性別',
  },
  {
    index: INDEX_BIRTHDAY,
    label: '生年月日',
  },
  {
    index: INDEX_POSTAL_CODE,
    label: '郵便番号',
  },
  {
    index: INDEX_TEL_MAIL,
    label: '連絡先',
  },
];

function renderStepper(stepIndex, boundActions) {
  return (
    <Stepper activeStep={stepIndex}>
      {REGISTRATION_STEPS.map((step) => {
        return (
          <Step
            key={step.index}
            onClick={() => {
              if (stepIndex <= step.index) {
                return;
              }
              boundActions.updateRegistrationForm({
                stepIndex: step.index,
              });
            }}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}

function renderFormComponent(stepIndex, boundActions) {
  return (
    <SwipeableViews
      styleName="swipe-container"
      index={stepIndex}
    >
      <GenderSelect
        onSelected={(gender) => {
          boundActions.updateRegistrationForm({
            stepIndex: stepIndex + 1,
            gender,
          });
        }}
      />
      <BirthdaySelect
        onSelected={(date) => {
          boundActions.updateRegistrationForm({
            stepIndex,
            birthday: date.getTime(),
          });
        }}
        onClickNext={() => {
          // 入力の仕方考える
          boundActions.updateRegistrationForm({
            stepIndex: stepIndex + 1,
          });
        }}
      />
    </SwipeableViews>
  );
}

function RegistrationStepper(props) {
  const { stepIndex, dispatch } = props;
  const boundActions = bindActionCreators({ updateRegistrationForm }, dispatch);
  return (
    <div>
      {renderStepper(stepIndex, boundActions)}
      {renderFormComponent(stepIndex, boundActions)}
    </div>
  );
}

RegistrationStepper.propTypes = {
  stepIndex: PropTypes.number,
  dispatch: PropTypes.func,
};

RegistrationStepper.defaultProps = {
  stepIndex: 0,
  dispatch: null,
};

export default connect(state => ({
  ...state.registration,
}))(RegistrationStepper);
