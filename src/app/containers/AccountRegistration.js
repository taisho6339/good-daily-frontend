import React from 'react';
import { connect } from 'react-redux';
import './AccountRegistration.scss';

function AccountRegistration() {
  return (
    <div styleName="content">
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
