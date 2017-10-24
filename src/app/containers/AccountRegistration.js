import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import { updateRegistrationForm } from '../redux/actions/registrationAction';
import GenderSelect from '../components/organisms/GenderSelect/GenderSelect';
import './AccountRegistration.scss';

function AccountRegistration(props) {
  const { stepIndex, dispatch } = props;
  const boundActions = bindActionCreators({ updateRegistrationForm }, dispatch);
  return (
    <div styleName="content">
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel>性別</StepLabel>
        </Step>
        <Step>
          <StepLabel>誕生日</StepLabel>
        </Step>
        <Step>
          <StepLabel>〒郵便番号</StepLabel>
        </Step>
      </Stepper>
      <GenderSelect
        onSelected={(gender) => {
          boundActions.updateRegistrationForm({
            stepIndex: stepIndex + 1,
            gender,
          });
        }}
      />
    </div>
  );
}

AccountRegistration.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  ...state.routing,
  ...state.registration,
}))(AccountRegistration);
