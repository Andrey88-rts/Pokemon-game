import styled from "./style.module.css";
import { useHistory } from 'react-router-dom';

export default function Header({ title, descr, onClickButton }) {
  const history = useHistory();
  const handleClick = () => {
    console.log('<Header />');
    history.push('/game');
  }

  return (
    <header className={styled.root}>
      <div className={styled.forest}></div>
      <div className={styled.silhouette}></div>
      <div className={styled.moon}></div>
      <div className={styled.container}>
        <h1>{title || "Not title"}</h1>
        <p>{descr || "Not descr"}</p>
        <button className={styled.button} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}