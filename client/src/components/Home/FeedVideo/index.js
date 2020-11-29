import React from 'react';

import img from '../../../assets/img.png';
import style from './FeedVideo.module.scss';

export default function FeedVideo() {

  return (
    <div className={style.container}>
      <div className={style.stretchy}>
        <div className={style.video}>
          <img src={img} alt="Video" className={style.thumbnail}/>
          <div className={style.videoInfo}>
            <div className={style.image}>
              <img src={img} alt="Channel"/>
            </div>
            <div className={style.description}>
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
      </div>
    </div>
  );
}
