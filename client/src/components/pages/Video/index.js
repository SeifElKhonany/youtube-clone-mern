import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Drawer from '../../Layout/Drawer';
import Comment from '../../Video/Comment';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SortIcon from '@material-ui/icons/Sort';

import style from './Video.module.scss';

export default function Video() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
    <Header toggleDrawer={toggleDrawer}/>
    <div className={style.flex}>
      {openDrawer ? <Drawer /> : null}
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.video}></div>
          <h1 className={style.videoHeader}>Medium Debbie | This Past Weekend w/ Theo Von #308</h1>
          <div className={style.videoFooter}>
            <div>
              51,258 views • Nov 20, 2020
            </div>
            <div className={style.videoActions}>
              <button>
                <ThumbUpIcon />
                1.9k
              </button>
              <button>
                <ThumbDownIcon />
                21
              </button>
              <button>
                <ReplyIcon />
                Share
              </button>
              <button>
                <PlaylistAddIcon />
                Save
              </button>
              <button>
                <MoreHorizIcon />
              </button>
            </div>
          </div>
          <div className={style.commentSection}>
            <h3>2,126 Comments</h3>
            <SortIcon />
            Sort by
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <div className={style.right}>
        </div>
      </div>
    </div>
    </>
  );
}
