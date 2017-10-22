import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'react-toolbox/lib/app_bar';
import './Root.scss';

function Root(props) {
  return (
    <div styleName="application">
      <AppBar title="React" />
      {props.children}
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
