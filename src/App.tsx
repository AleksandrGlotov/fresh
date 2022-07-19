import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import s from './App.module.scss';
import { AboutFresh } from './components/AboutFresh/Aboutfresh';
import { Bands } from './components/Bands/Bands';
import { Eat } from './components/Eat/Eat';
import { FirstScreen } from './components/FirstScreen/FirstScreen';
import { Footer } from './components/Footer/Footer';
import { Games } from './components/Games/Games';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Road } from './components/Road/Road';
import { Sleep } from './components/Sleep/Sleep';
import { Tickets } from './components/Tickets/Tickets';



const App = () => {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <FirstScreen />
        <AboutFresh />
        <Bands />
        <Tickets />
        <Eat />
        <Sleep />
        <Games />
        <InfoBlock />
        <Road />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
