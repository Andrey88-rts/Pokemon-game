import styled from './style.module.css';
import cn from 'classnames';

export default function Navbar({ onMenu, isActive, bgActive = false }) {
  const handlerClick = () => {
    console.log("Gamburger");
    onMenu && onMenu();
  }
  return (
    <nav id={styled.navbar} className={cn({ [styled.bgActive]: bgActive })}>
      <div className={styled.navWrapper}>
        <p className={styled.brand}>
          LOGO
        </p>
        <div
          className={cn(styled.menuButton, { [styled.active]: isActive })}
          onClick={handlerClick}>
          <span />
        </div>
      </div>
    </nav>
  )
}