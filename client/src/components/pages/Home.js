import React, { useState } from 'react';
import Header from '../Layout/Header/Header';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Drawer from '../Layout/Drawer/Drawer';

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <Header onClick={toggleDrawer}/>
      {openDrawer ? <Drawer /> : <Sidebar />}
    </>
  );
}
