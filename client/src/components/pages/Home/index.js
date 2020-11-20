import React, { useState } from 'react';
import Feed from '../../Feed';
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import Drawer from '../../Layout/Drawer';

import style from './Home.module.scss';

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <div className={style.flex}>
        {openDrawer ? <Drawer /> : <Sidebar />}
        <Feed />
      </div>
    </>
  );
}
