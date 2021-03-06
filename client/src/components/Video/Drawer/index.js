import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';

import Modal from '../../Layout/Modal';


import style from "./Drawer.module.scss";

export default function Drawer({ toggleDrawer }) {
  return (
    <Modal toggle={toggleDrawer}>
      <Slide in={true} direction="right">
        <div className={style.drawer}>
          <div className={style.title}>
            <button className={style.menuIcon}><MenuIcon onClick={toggleDrawer}/></button>
            <div className={style.logo}>
              <YouTubeIcon className={style.logo}/>
              Youtube
            </div>
          </div>
          <div className={style.item}>
            <HomeIcon className={style.icon}/>
            Home
          </div>
          <div className={style.item}>
          <WhatshotIcon className={style.icon}/>
          Trending
          </div>
          <div className={style.item}>
          <SubscriptionsIcon className={style.icon}/>
          Subscriptions
          </div>
          <div className={style.item}>
          <VideoLibraryIcon className={style.icon}/>
          Library
          </div>
          <div className={style.item}>
          <HistoryIcon className={style.icon}/>
          History
          </div>
          <div className={style.item}>
          <OndemandVideoIcon className={style.icon}/>
          Your videos
          </div>
          <div className={style.item}>
          <WatchLaterIcon className={style.icon}/>
          Watch later
          </div>
          <div className={style.item}>
          <PlaylistPlayIcon className={style.icon}/>
          Playlist
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
          <div className={style.item}>
          <ExpandMoreIcon className={style.icon}/>
          Show more
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
