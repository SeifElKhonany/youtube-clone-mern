import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Drawer from '../../Video/Drawer';
import Comment from '../../Video/Comment';
import MiniVideo from '../../MiniVideo';

import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SortIcon from '@material-ui/icons/Sort';

import img from '../../../assets/img.jpg';
import style from './Video.module.scss';

export default function Video() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
    <Header toggleDrawer={toggleDrawer}/>
    {openDrawer ? <Drawer toggleDrawer={toggleDrawer}/> : null}
      <div className={style.container}>
        <div className={style.left}>
          <img src={img} alt="Video" className={style.video} />
          <h1 className={style.videoHeader}>Medium Debbie | This Past Weekend w/ Theo Von #308</h1>
          <div className={style.videoFooter}>
            <div>
              <h2>
                51,258 views • Nov 20, 2020
              </h2>
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
                SHARE
              </button>
              <button>
                <PlaylistAddIcon />
                SAVE
              </button>
              <button>
                <MoreHorizIcon />
              </button>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.descriptionHeader}>
              <div className={style.channelInfo}>
                <img src={img} alt="Channel"/>
                <div>
                  <h1>Andre Lenzgen</h1>
                  <h2>483 subscribers</h2>
                </div>
              </div>
              <div className={style.subscribe}>
                <button>
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className={style.descriptionContent}>
              <p className={showMore ? style.showMore : null}>
              One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.

              Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.

              Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.

              Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.

              In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable.

              Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too.

              Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured.

              You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in.

              Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners.

              Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small. Felicity now law securing breeding likewise extended and. Roused either who favour why ham.
            </p>
            <button onClick={() => setShowMore(!showMore)}>SHOW { showMore ? "LESS" : "MORE"}</button>
          </div>
          </div>
          <div className={style.commentSection}>
            <div className={style.commentsHeader}>
              <h3>2,126 Comments</h3>
              <Button
              variant="text"
              startIcon={<SortIcon />}
              >
              SORT BY
              </Button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <div className={style.right}>
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
          <MiniVideo />
        </div>
      </div>
    </>
  );
}
