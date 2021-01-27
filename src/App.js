import React from 'react';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import bg3 from './assets/bg3.jpg';
import bg2 from './assets/bg2.jpg';


export default function App() {


  return (
    <>
      <Header title="Pokemon" descr="Game!" />
      <Layout title="Pokemon" descr="Start game!" urlBg={bg3} />
      <Layout title="Pokemon" descr="Start game!" colorBg='green' />
      <Layout title="Pokemon" descr="Start game!" urlBg={bg2} />

      <Footer />
    </>
  )
}