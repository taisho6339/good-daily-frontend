import React from 'react';
import './GlobalFooter.scss';
import TextLabel from '../../atoms/TextLabel';
import NoteLabel from '../../atoms/NoteLabel';

function GlobalFooter() {
  return (
    <div styleName="content">
      <TextLabel text="Good-Buy! ©2017" />
      <NoteLabel
        styleName="note"
        text="createdBy taisho6339"
      />
    </div>
  );
}

export default GlobalFooter;
