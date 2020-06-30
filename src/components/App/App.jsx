import React from 'react';

import Header from '../Header';
import FlightsResult from '../FlightsResult/FlightsResult';

import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <FlightsResult />
      {/* TODO: Add a component to display results here */}
    </main>
  </div>
);

export default App;
