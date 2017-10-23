import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Root.scss';
import GlobalHeader from '../components/organisms/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/organisms/GlobalFooter/GlobalFooter';

function Root(props) {
  return (
    <MuiThemeProvider>
      <div styleName="application">
        <GlobalHeader />
        <div styleName="container">
          {props.children}
        </div>
        <GlobalFooter />
      </div>
    </MuiThemeProvider>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
