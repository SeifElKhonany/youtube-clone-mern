import React from 'react';
import style from './Header.module.css';

import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <MenuIcon className={style.menuIcon}/>
        <YouTubeIcon/>
        Youtube
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Search" className={style.searchBar} />
        <div className={style.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={style.iconBar}>
        <VideoCallIcon className={style.icon}/>
        <AppsIcon className={style.icon}/>
        <NotificationsIcon className={style.icon}/>
        <AccountCircleIcon className={style.icon}/>
      </div>
    </div>
  );
}
