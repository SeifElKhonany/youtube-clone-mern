import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.sideBar}>
      <table>
        <tbody>
          <tr>
            <td className={style.icon}>
              <HomeIcon />
            </td>
          </tr>
          <tr>
            <td className={style.label}>
              Home
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <WhatshotIcon />
            </td>
          </tr>
          <tr>
            <td className={style.label}>
              Trending
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <SubscriptionsIcon />
            </td>
          </tr>
          <tr>
            <td className={style.label}>
              Subscriptions
            </td>
          </tr>
          <tr>
            <td className={style.icon}>
              <VideoLibraryIcon />
            </td>
          </tr>
          <tr>
            <td className={style.label}>
              Library
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
