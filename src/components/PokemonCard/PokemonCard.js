import { useState } from 'react';
import cn from 'classnames';
import styled from './style.module.css';
import back from './assets/card-back-side.jpg';

export default function PokemonCard({ name, img, id, type, values }) {

  const [isActive, setActive] = useState(false);

  const handlerClick = () => {
    setActive(!isActive); //Toggle function
  }

  return (
    <div className={styled.root} onClick={handlerClick}>
      <div className={cn(styled.pokemonCard, { [styled.active]: isActive })}>
        <div className={styled.cardFront}>
          <div className={cn(styled.wrap, styled.front)}>
            <div className={cn(styled.pokemon, styled[type])}>
              <div className={styled.values} >
                <div className={cn(styled.count, styled.top)}>{values.top}</div>
                <div className={cn(styled.count, styled.right)}>{values.right}</div>
                <div className={cn(styled.count, styled.bottom)}>{values.bottom}</div>
                <div className={cn(styled.count, styled.left)}>{values.left}</div>
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
          < div className={cn(styled.wrap, styled.back)}>
            <img src={back} alt="Сard Backed" />
          </div >
        </div >

      </div >
    </div >
  )
}