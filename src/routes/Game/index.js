
import PokemonCard from '../../components/PokemonCard';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import database from '../../services/firebase';
import { useHistory } from 'react-router-dom';
import pokemons from '../../services/pokemonJSON';
import styled from "./style.module.css";


export default function GamePage() {
  const history = useHistory();
  const [full, setFull] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setFull(snapshot.val());
    })
  }, [full]);

  const handleClick = () => {
    history.push('/');
  }

  const onCardClick = (id) => {
    setFull(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          database.ref('pokemons/' + item[0]).set({ ...pokemon, isActive: !pokemon.isActive });
        };
        acc[item[0]] = pokemon;
        return acc;
      }, {});

    });

  }

  const handleAddPokemonClick = () => {
    const newKey = database.ref().child('pokemons').push().key;
    const updates = {};
    const pokemonCharacter = Math.floor(Math.random() * pokemons.length);
    updates['pokemons/' + newKey] = pokemons[pokemonCharacter];
    return database.ref().update(updates);
  }

  return (
    <>
      <div className={styled.btnAdd}>
        <button className={styled.button} onClick={handleClick}>
          Back to HomePage
        </button>
      </div>
      <Layout title="Cards" colorBg={"lightgreen"}>
        <div className={styled.btnAdd}>
          <button className={styled.btn} onClick={handleAddPokemonClick}>
            ADD NEW POKEMON
          </button>
        </div>
        <div className={styled.flex} >
          {
            Object.entries(full).map(([key, { name, img, id, type, values, isActive }]) =>
              <PokemonCard key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                isActive={isActive}
                onCardClick={onCardClick} />)
          }
        </div>
      </Layout>
    </>
  )

}