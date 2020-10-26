import React from 'react';
import style from './Header.module.scss';

import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div className={style.menuIcon}>
          <MenuIcon onClick={props.onClick}/>
        </div>
        <YouTubeIcon/>
        Studio
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Search" className={style.searchBar} />
        <div className={style.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={style.iconBar}>
        <HelpOutlineIcon className={style.icon}/>
        <div className={style.createButton}>
          <VideoCallIcon/>
          CREATE
        </div>
      </div>
    </div>
  );
}
