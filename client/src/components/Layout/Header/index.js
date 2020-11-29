import React from 'react';
import style from './Header.module.scss';

import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.menuIcon}>
        <MenuIcon onClick={props.toggleDrawer}/>
      </div>
      <div className={style.logo}>
        <YouTubeIcon className={style.logo}/>
        Youtube
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Search" className={style.searchBar} />
        <div className={style.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={style.iconBar}>
        <button className={style.iconButton}><span className={style.icon}><VideoCallIcon /></span></button>
        <button className={style.iconButton}><span className={style.icon}><AppsIcon /></span></button>
        <button className={style.iconButton}><span className={style.icon}><NotificationsIcon /></span></button>
        <button className={style.iconButton}><span className={style.icon}><AccountCircleIcon /></span></button>
      </div>
    </div>
  );
}
