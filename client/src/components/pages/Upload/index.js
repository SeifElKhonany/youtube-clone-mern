import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Drawer from '../../Layout/Drawer';

import style from './Upload.module.scss';

export default function Upload() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div>
      <Header onClick={toggleDrawer}/>
      <div className={style.flex}>
        {openDrawer ? <Drawer /> : <Sidebar />}
      </div>
    </div>
  );
}
