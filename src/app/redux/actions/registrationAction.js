export const UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM';

export const updateRegistrationForm = (registerInput) => {
  console.log(registerInput);
  return ({
    type: UPDATE_REGISTRATION_FORM,
    payload: { ...registerInput },
  });
};
