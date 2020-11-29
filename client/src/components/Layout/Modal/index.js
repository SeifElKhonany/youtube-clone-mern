import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import style from "./Modal.module.scss";

export default function Modal({ toggle, children }) {
  return (
      <div className={style.modal}>
        <ClickAwayListener onClickAway={toggle}>
          {children}
        </ClickAwayListener>
      </div>
  );
}
