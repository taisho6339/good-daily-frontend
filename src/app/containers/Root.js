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
  children: PropTypes.node.isRequired,
};

export default Root;
