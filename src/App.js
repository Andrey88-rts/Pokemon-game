
import React from 'react';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';



export default function App() {
  return (
    <>
      <Header title="Pokemon" descr="Game!" />
      <Layout title="Pikachu" descr="Electro" urlBg={bg2} />
      <Layout title="Pikachu" descr="Electro" colorBg='green' />
      <Layout title="Pikachu" descr="Electro" urlBg={bg3} />

      <Footer />
    </>
  )
}