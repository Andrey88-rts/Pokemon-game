import styled from './style.module.css';
import cn from 'classnames';

export default function Navbar({ onMenu, isActive }) {
  const handlerClick = () => {
    console.log("Gamburger");
    onMenu && onMenu();
  }
  return (
    <nav id={styled.navbar}>
      <div className={styled.navWrapper}>
        <p className={styled.brand}>
          LOGO
        </p>
        <a href="#logo"
          className={cn(styled.menuButton, isActive ? [styled.active] : [styled.deactive])}
          onClick={handlerClick}>
          <span />
        </a>
      </div>
    </nav>
  )
}