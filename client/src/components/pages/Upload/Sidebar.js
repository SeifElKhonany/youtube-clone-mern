import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CommentIcon from '@material-ui/icons/Comment';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BrushIcon from '@material-ui/icons/Brush';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';

import style from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={style.sideBar}>
      <div className={style.moveable}>
        <table>
          <tbody>
            <tr>
              <td className={style.icon}>
                <DashboardIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <VideoLibraryIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <PlaylistPlayIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <AssessmentIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <CommentIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <SubtitlesIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <CopyrightIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <AttachMoneyIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <BrushIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <LibraryMusicIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={style.fixed}>
        <table>
          <tbody>
            <tr>
              <td className={style.icon}>
                <DashboardIcon />
              </td>
            </tr>
            <tr>
              <td className={style.icon}>
                <VideoLibraryIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
