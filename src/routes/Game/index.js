
import styled from './style.module.css';


export default function GamePage({ onClickBack }) {
  const handleClick = () => {
    console.log("<GamePage/>");
    onClickBack && onClickBack();
  }
  return (
    <>
      <div className={styled.grid}>
        <div className={styled.title}>
          This is Game Page!!!!
        </div>
        <button className={styled.button} onClick={handleClick}>
          Back to HomePage
        </button>
      </div>
    </>
  )

}