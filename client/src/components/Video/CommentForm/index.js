import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import img from '../../../assets/img.png';
import style from './CommentForm.module.scss';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const [enabled, setEnabled] = useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
    e.target.value ? setEnabled(true) : setEnabled(false);
  }

  return (
    <div className={style.comment}>
      <img src={img} alt="Commenter"/>
      <div>
        <form>
          <input
          type="text"
          name="comment"
          placeholder="Add a public comment..."
          className={style.input}
          onChange={handleChange}
          value={comment}
          />
          <div className={style.border} />
          <button className={style.commentButton} disabled={!enabled}>
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}
