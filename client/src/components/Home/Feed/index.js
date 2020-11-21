import React from 'react';
import FeedVideo from '../FeedVideo';

import style from './Feed.module.scss';

export default function Feed() {

  return (
    <div className={style.feed}>
      <FeedVideo />
      <FeedVideo />
      <FeedVideo />
      <FeedVideo />
      <FeedVideo />
      <FeedVideo />
      <FeedVideo />
    </div>
  );
}
