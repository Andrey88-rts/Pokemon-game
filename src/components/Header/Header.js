import styled from "./style.module.css";

export default function Header({ title, descr, onClickButton }) {
  const handleClick = () => {
    console.log('<Header />');
    onClickButton && onClickButton('game');
  }

  return (
    <header className={styled.root}>
      <div className={styled.forest}></div>
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