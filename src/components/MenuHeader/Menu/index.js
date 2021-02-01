import styled from './style.module.css';
import cn from 'classnames';

export default function Menu({ isActive }) {
  return (
    <div className={cn(styled.menuContainer, isActive ? [styled.active] : [styled.deactive])}>
      < div className={styled.overlay} />
      < div className={styled.menuItems}>
        <ul>
          <li>
            <a href="#welcome">
              HOME
        </a>
          </li>
          <li>
            <a href="#game">
              GAME
        </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
        </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
        </a>
          </li>
        </ul>
      </div >
    </div >
  )
}