import React, { useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';


export default function MenuHeader() {
  const [isActive, setActive] = useState(false)

  const handlerOpenMenu = () => {
    setActive(!isActive);
  }
  return (
    <>
      <Menu isActive={isActive} />
      <Navbar onMenu={handlerOpenMenu} isActive={isActive} />
    </>
  )
}