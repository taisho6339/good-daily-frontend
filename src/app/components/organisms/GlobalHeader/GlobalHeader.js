import AppBar from 'react-toolbox/lib/app_bar';
import React from 'react';
import style from './GlobalHeader.scss';

function GlobalHeader() {
  return (
    <AppBar
      theme={style}
      title="Good-Buy!"
    />
  );
}

export default GlobalHeader;
