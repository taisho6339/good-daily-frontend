import React from 'react';
import PropTypes from 'prop-types';

function Root(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node
};

export default Root;