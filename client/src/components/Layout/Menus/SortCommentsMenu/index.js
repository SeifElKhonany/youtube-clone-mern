import React from 'react';

import Grow from '@material-ui/core/Grow';

import style from "./SortCommentsMenu.module.scss";

export default function SortCommentsMenu({ openMenu, toggleMenu }) {
  return (
    <Grow in={openMenu} timeout={500}>
      <span className={style.menu}>
        <ul className={style.list}>
          <li>
            <button>
              <span className={style.text}>Top comments</span>
            </button>
          </li>
          <li>
            <button>
              <span className={style.text}>Newest first</span>
            </button>
          </li>
        </ul>
      </span>
    </Grow>
  );
}
