import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import CloseIcon from '@material-ui/icons/Close';
import LockIcon from '@material-ui/icons/Lock';
import AddIcon from '@material-ui/icons/Add';

import Modal from '../../Modal';

import style from "./SaveToMenu.module.scss";

export default function Menu({ openMenu, toggleMenu }) {
  return (
    <Modal toggle={toggleMenu}>
      <div className={style.menu}>
        <div className={style.title}>
          <p>Save To...</p>
          <button className={style.titleButton} onClick={toggleMenu}>
            <span className={style.icon}><CloseIcon /></span>
          </button>
        </div>
        <ul className={style.list}>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
          <li>
            <button>
              <span><Checkbox color="primary" disableRipple/></span>
              <span className={style.text}>Watch it</span>
              <span className={style.icon}><LockIcon size="small"/></span>
            </button>
          </li>
        </ul>
        <div className={style.footer}>
          <button className={style.footerButton}>
            <span className={style.icon}><AddIcon /></span>
            <span className={style.text}>Create new playlist</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
