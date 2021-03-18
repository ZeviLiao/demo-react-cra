// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// const shadow = {
//   boxShadow: '0 0 10px 10px #eaeaea',
//   padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
// };

function Counter() {
  const [count, setCount] = useState(2)

  const handleClick = (type) => () => {
    if (type === 'increment') {
      setCount(count + 1);
    }
    if (type === 'decrement') {
      setCount(count - 1);
    }
  };

  return (
    <div className="container" /*style={shadow}*/>
      {/* {console.log('render')} */}
      <div className="chevron chevron-up"
        style={{
          visibility: count >= 3 && 'hidden',
        }}
        onClick={handleClick('increment')}
      />
      <div className="number">{count}</div>
      <div className="chevron chevron-down"
        style={{
          visibility: count <= 0 && 'hidden',
        }}
        onClick={handleClick('decrement')}
      />
    </div>
  );
}

function App() {

  // const counters = Array.from({length:3},(_,i)=> i)
  const counters = [...Array(5).keys()]  /* [0, 1, 2, 3, 4] */
  return (
    counters.map((i)=><Counter key={i}/>)
  );
}

export default App;
