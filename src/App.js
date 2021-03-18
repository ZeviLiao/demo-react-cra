// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  // const counters = Array.from({length:3},(_,i)=> i)
  const counters = [...Array(5).keys()]  /* [0, 1, 2, 3, 4] */
  return (
    counters.map((i)=><Counter key={i}/>)
  );
}

export default App;
