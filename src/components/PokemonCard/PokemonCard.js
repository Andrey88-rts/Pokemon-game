import { useState } from 'react';
import styled from './style.module.css';
import back from './assets/card-back-side.jpg';

export default function PokemonCard({ name, img, id, type, values }) {

  const [isActive, setActive] = useState(false);

  const handlerClick = () => {
    setActive((isActive) => isActive = !isActive); //Toggle function
  }

  return (
    <div className={styled.root} onClick={handlerClick}>
      <div className={`${styled.pokemonCard} ${isActive ? styled.active : ''}`}>
        <div className={styled.cardFront}>
          <div className={[styled.wrap, styled.front].join(' ')}>
            <div className={`${styled.pokemon} ${styled[type]}`}>
              <div className={styled.values} >
                <div className={[styled.count, styled.top].join(' ')}>{values.top}</div>
                <div className={[styled.count, styled.right].join(' ')}>{values.right}</div>
                <div className={[styled.count, styled.bottom].join(' ')}>{values.bottom}</div>
                <div className={[styled.count, styled.left].join(' ')}>{values.left}</div>
              </div>
              <div className={styled.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={styled.info}>
                <span className={styled.number}>#{id}</span>
                <h3 className={styled.name}>{name}</h3>
                <small className={styled.type}>Type: <span>{type}</span></small>
              </div>
            </div>
          </div >
        </div >

        <div className={styled.cardBack}>
          < div className={[styled.wrap, styled.back].join(' ')}>
            <img src={back} alt="Сard Backed" />
          </div >
        </div >

      </div >
    </div >
  )
}