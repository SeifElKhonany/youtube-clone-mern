import React, { useState } from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import img from '../../../assets/img.jpg';
import style from './Comment.module.scss';

export default function Comment() {

  return (
    <div className={style.comment}>
      <img src={img} alt="Commenter"/>
      <div>
        <p>alex</p>
        <p>Brendan looks like he can't wait to get home and switch into leggings.</p>
        <div className={style.actions}><ThumbUpIcon fontSize="small"/> 1.2K <ThumbDownIcon fontSize="small"/> <button>REPLY</button></div>
      </div>
    </div>
  );
}
