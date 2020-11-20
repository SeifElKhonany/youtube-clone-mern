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

import style from "./Drawer.module.scss";

export default function Drawer() {
  return (
    <div className={style.drawer}>
    <HomeIcon />
    Home
    <WhatshotIcon />
    Trending
    <SubscriptionsIcon />
    Subscriptions
    <VideoLibraryIcon />
    Library
    <HistoryIcon />
    History
    <OndemandVideoIcon />
    Your videos
    <WatchLaterIcon />
    Watch later
    <PlaylistPlayIcon />
    Playlist
    <ExpandMoreIcon />
    Show more
    </div>
  );
}

/*
<HomeIcon />
Home
<WhatshotIcon />
Trending
<SubscriptionsIcon />
Subscriptions
<VideoLibraryIcon />
Library
<HistoryIcon />
History
<OndemandVideoIcon />
Your videos
<WatchLaterIcon />
Watch later
<PlaylistPlayIcon />
Playlist
<ExpandMoreIcon />
Show more
*/
