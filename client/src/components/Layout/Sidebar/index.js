import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import style from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={style.sideBar}>
      <div className={style.item}><HomeIcon /><br/>Home</div>
      <div className={style.item}><WhatshotIcon /><br/>Trending</div>
      <div className={style.item}><SubscriptionsIcon /><br/>Subscriptions</div>
      <div className={style.item}><VideoLibraryIcon /><br/>Library</div>
    </div>
  );
}
