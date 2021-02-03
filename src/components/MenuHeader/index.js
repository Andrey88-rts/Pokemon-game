import React, { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';


export default function MenuHeader({ bgActive }) {
  const [isActive, setActive] = useState(null)

  const handlerOpenMenu = () => {
    setActive(prevState => !prevState);
  }
  const handlerCloseMenu = () => {
    setActive(prevState => !prevState);
  }

  return (
    <>
      <Menu onMenuClose={handlerCloseMenu} isActive={isActive} />
      <Navbar onMenu={handlerOpenMenu} bgActive={bgActive} isActive={isActive} />
    </>
  )
}