import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import SwipeableViews from 'react-swipeable-views';
import { updateRegistrationForm } from '../../../redux/actions/registrationAction';
import GenderSelect from '../../molecules/GenderSelect/GenderSelect';
import BirthdaySelect from '../../molecules/BirthdaySelect/BirthdaySelect';
import './RegistrationStepper.scss';

function renderStepper(stepIndex) {
  return (
    <Stepper activeStep={stepIndex}>
      <Step>
        <StepLabel>性別</StepLabel>
      </Step>
      <Step>
        <StepLabel>生年月日</StepLabel>
      </Step>
      <Step>
        <StepLabel>〒郵便番号</StepLabel>
      </Step>
      <Step>
        <StepLabel>連絡先</StepLabel>
      </Step>
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
      />
    </SwipeableViews>
  );
}

function renderBackButton(stepIndex, boundActions) {
  return (
    <FlatButton
      label="戻る"
      onClick={() => {
        if (stepIndex <= 0) {
          return;
        }
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex - 1,
        });
      }}
    />
  );
}

function RegistrationStepper(props) {
  const { stepIndex, dispatch } = props;
  const boundActions = bindActionCreators({ updateRegistrationForm }, dispatch);
  return (
    <div>
      {renderStepper(stepIndex)}
      {renderFormComponent(stepIndex, boundActions)}
      {renderBackButton(stepIndex, boundActions)}
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
