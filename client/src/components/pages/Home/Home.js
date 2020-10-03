import React, { useState } from 'react';
import Feed from '../../Feed/Feed';
import Header from '../../Layout/Header/Header';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import Drawer from '../../Layout/Drawer/Drawer';

import style from './Home.module.css';

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <Header onClick={toggleDrawer}/>
      <div className={style.flex}>
        {openDrawer ? <Drawer /> : <Sidebar />}
        <Feed />
      </div>
    </>
  );
}
