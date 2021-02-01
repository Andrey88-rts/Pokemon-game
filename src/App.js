import { useState } from 'react';
import HomePage from './routes/Home';
import GamePage from './routes/Game';

export default function App() {
  const [page, setPage] = useState('app');
  const handleChangePage = (page) => {
    console.log("<App/>");
    setPage(page);
  }

  const handleClick = () => {
    console.log('<App/>');
    setPage('app');
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />
    case "game":
      return <GamePage onClickBack={handleClick} />
    default:
      return <HomePage />
  }

}