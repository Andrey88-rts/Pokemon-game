
import PokemonCard from '../../components/PokemonCard';
import { useState } from 'react';
import Layout from '../../components/Layout';

import pokemons from '../../services/pokemonJSON';
import styled from "./style.module.css";


export default function GamePage({ onClickBack }) {
  const [full, setFull] = useState(pokemons);
  console.log(full);
  const handleClick = () => {
    onClickBack && onClickBack('app');
  }

  const onCardClick = (id) => {
    setFull(pokemons.map((item) => {
      if (item.id === id) {
        item.isActive = !item.isActive;
      }
      return item;
    }))

  }

  return (
    <>
      <button className={styled.button} onClick={handleClick}>
        Back to HomePage
        </button>
      <Layout title="Cards" colorBg={"lightgreen"}>
        <div className={styled.flex} >
          {
            pokemons.map(item =>
              <PokemonCard key={item.id}
                name={item.name}
                img={item.img}
                id={item.id}
                type={item.type}
                values={item.values}
                isActive={item.isActive}
                onCardClick={onCardClick} />)
          }
        </div>
      </Layout>
    </>
  )

}