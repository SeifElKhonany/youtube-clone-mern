import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import style from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={style.sideBar}>
      <table>
        <tbody>
          <tr>
            <td className={style.icon}>
              <HomeIcon />
              <p className={style.label}>
                Home
              </p>
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <WhatshotIcon />
              <p className={style.label}>
                Trending
              </p>
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <SubscriptionsIcon />
              <p className={style.label}>
                Subscriptions
              </p>
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <VideoLibraryIcon />
              <p className={style.label}>
                Library
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
