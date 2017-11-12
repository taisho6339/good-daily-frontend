import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRegistrationForm } from '../../../redux/actions/registrationAction';
import GenderSelect from '../../molecules/GenderSelect/GenderSelect';
import BirthdaySelect from '../../molecules/BirthdaySelect/BirthdaySelect';
import MailAddressForm from '../../molecules/MailAddressForm/MailAddressForm';
import TelNumberForm from '../../molecules/TelNumberForm/TelNumberForm';
import PostalCodeForm from '../../molecules/PostalCodeForm/PostalCodeForm';
import PasswordForm from '../../molecules/PasswordForm/PasswordForm';
import RegistrationComplete from '../../molecules/RegistrationComplete/RegistrationComplete';
import './RegistrationStepper.scss';
// TODO: 性別、生年月日、メールアドレス、電話番号、郵便番号、パスワード

function renderStepper(stepIndex, boundActions) {
  const onClickNext = () => {
    // 入力の仕方考える
    boundActions.updateRegistrationForm({
      stepIndex: stepIndex + 1,
    });
  };
  const registerStepContents = [
    <GenderSelect
      onSelected={(gender) => {
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex + 1,
          gender,
        });
      }}
    />,
    <BirthdaySelect
      onSelected={(date) => {
        boundActions.updateRegistrationForm({
          birthday: date.getTime(),
        });
      }}
      onClickNext={onClickNext}
    />,
    <MailAddressForm
      onClickNext={() => {
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex + 1,
        });
      }}
      onBlur={(mailAddress) => {
        boundActions.updateRegistrationForm({
          mailAddress,
        });
      }}
    />,
    <TelNumberForm
      onClickNext={() => {
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex + 1,
        });
      }}
      onBlur={(telNumber) => {
        boundActions.updateRegistrationForm({
          telNumber,
        });
      }}
    />,
    <PostalCodeForm
      onClickNext={() => {
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex + 1,
        });
      }}
      onBlur={(postalCode) => {
        boundActions.updateRegistrationForm({
          postalCode,
        });
      }}
    />,
    <PasswordForm
      onClickNext={() => {
        boundActions.updateRegistrationForm({
          stepIndex: stepIndex + 1,
        });
      }}
      onBlur={(password) => {
        boundActions.updateRegistrationForm({
          password,
        });
      }}
    />,
    <RegistrationComplete />,
  ];
  return registerStepContents[stepIndex];
}

function RegistrationStepper(props) {
  const { stepIndex, dispatch } = props;
  const boundActions = bindActionCreators({ updateRegistrationForm }, dispatch);
  return (
    <div>
      {renderStepper(stepIndex, boundActions)}
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
