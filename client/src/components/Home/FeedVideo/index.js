import React from 'react';

import img from '../../../assets/img.jpg';
import style from './FeedVideo.module.scss';

export default function FeedVideo() {

  return (
    <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img} alt="Channel"/>
          </div>
          <div className={style.text}>
            <p className={style.title}>
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
  );
}
