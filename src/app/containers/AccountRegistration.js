import React from 'react';
import { connect } from 'react-redux';

function AccountRegistration() {
  return (
    <div>
      <p>テストだよ</p>
    </div>
  );
}

// AccountRegister.propTypes = {
//   children: PropTypes.node
// };

export default connect(state => ({
  ...state.routing,
}))(AccountRegistration);
