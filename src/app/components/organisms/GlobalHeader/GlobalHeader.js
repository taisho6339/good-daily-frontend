import React from 'react';
import TitleLabel from '../../atoms/TitleLabel';
import './GlobalHeader.scss';
import icon from '../../../constants/assets/app-icon.png';

function GlobalHeader() {
  return (
    <header styleName="app-bar">
      <img
        styleName="app-icon"
        src={icon}
        alt="Good-Buy"
      />
      <TitleLabel text="Good-Buy" />
    </header>
  );
}

export default GlobalHeader;
