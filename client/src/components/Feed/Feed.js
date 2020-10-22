import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import img from '../../assets/img.jpg';
import style from './Feed.module.css';

export default function Feed() {

  return (
    <div className={style.root}>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
              Title of the video
            </p>
            <p className={style.subtitle}>
              Channel name <br/>
              2M views . 2 years ago
            </p>
          </div>
        </div>
      </div>
      <div className={style.video}>
        <div className={style.thumbnail}></div>
        <div className={style.videoInfo}>
          <div className={style.image}>
            <img src={img}/>
          </div>
          <div className={style.txt}>
            <p className={style.title}>
              Title of the video
              Title of the video
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
  );
}
