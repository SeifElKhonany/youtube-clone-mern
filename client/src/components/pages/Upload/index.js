import React, { useState } from 'react';
import Header from '../../Upload/Header';
import Sidebar from '../../Upload/Sidebar';
import Drawer from '../../Layout/Drawer';
import UploadVideo from '../../Upload/UploadVideo';

import style from './Upload.module.scss';

export default function Upload() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div>
      <Header toggleDrawer={toggleDrawer}/>
      <div className={style.flex}>
        {openDrawer ? <Drawer /> : <Sidebar />}
        <div>
          <h1 className={style.header}>Channel Videos</h1>
          <UploadVideo />
        </div>
      </div>
    </div>
  );
}
