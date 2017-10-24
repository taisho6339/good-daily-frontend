import React from 'react';
// import TitleLabel from '../../atoms/TitleLabel';
import './GlobalHeader.scss';

function GlobalHeader() {
  return (
    <header styleName="app-bar">
      <img
        styleName="app-icon"
        src="https://www-mercari-jp.akamaized.net/assets/img/common/common/logo.svg?3667167085"
        alt="Good-Buy"
      />
    </header>
  );
}

export default GlobalHeader;
