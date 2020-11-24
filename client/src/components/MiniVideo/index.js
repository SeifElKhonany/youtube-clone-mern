import React from 'react';

import img from '../../assets/img.jpg';
import style from './MiniVideo.module.scss';

export default function MiniVideo() {

  return (
    <div className={style.video}>
        <img src={img} alt="Video" className={style.thumbnail}/>
        <div className={style.videoInfo}>
            <div><h1>Title of the video</h1></div>
            <div>
              <p className={style.subtitle}>
                Channel name <br/>
                2M views . 2 years ago
              </p>
            </div>
        </div>
      </div>
  );
}
