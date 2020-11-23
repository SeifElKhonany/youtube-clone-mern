import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import img from '../../../assets/img.jpg';
import style from './Comment.module.scss';

export default function Comment() {

  return (
    <div className={style.comment}>
      <img src={img} alt="Commenter"/>
      <div>
        <h5>alex</h5>
        <h6> 3 days ago</h6>
        <p>Brendan looks like he can't wait to get home and switch into leggings.</p>
        <div className={style.actions}>
          <button>
            <ThumbUpIcon fontSize="small"/>
            1.2K
          </button>
          <button>
            <ThumbDownIcon fontSize="small"/>
          </button>
          <Button
          color="primary"
          size="small"
          >
            REPLY
          </Button>
        </div>
      </div>
    </div>
  );
}
