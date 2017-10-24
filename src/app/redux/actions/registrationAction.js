export const UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM';

export const updateRegistrationForm = (registerInput) => {
  return ({
    type: UPDATE_REGISTRATION_FORM,
    payload: { ...registerInput },
  });
};
