import styled from './style.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const MENU = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "GAME",
    to: "/game"
  },
  {
    title: "ABOUT",
    to: "/about"
  },
  {
    title: "CONTACT",
    to: "/contact"
  }
]

export default function Menu({ isActive, onMenuClose }) {

  const handlerMenuClose = () => {
    console.log("<Link/>");
    onMenuClose && onMenuClose();
  }

  return (
    <div className={cn(styled.menuContainer, { [styled.active]: isActive === true, [styled.deactive]: isActive === false })}>
      < div className={styled.overlay} />
      < div>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index} onClick={handlerMenuClose}>
              <Link to={to} >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div >
    </div >
  )
}