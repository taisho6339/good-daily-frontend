import React from 'react';
import './GlobalFooter.scss';
import TextLabel from '../../atoms/TextLabel/TextLabel';
import NoteLabel from '../../atoms/NoteLabel/NoteLabel';

function GlobalFooter() {
  return (
    <footer styleName="content">
      <TextLabel text="グッデリ! ©2017" />
      <NoteLabel
        styleName="note"
        text="createdBy taisho6339"
      />
    </footer>
  );
}

export default GlobalFooter;
