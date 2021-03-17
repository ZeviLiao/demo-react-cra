// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};

function App() {
  const [count, setCount] = useState(256)

  return (
    <div className="container" style={shadow}>
      {console.log('render')}
      <div className="chevron chevron-up"
        onClick={() => {
          setCount(count + 1)
        }}
      />
      <div className="number">{count}</div>
      <div className="chevron chevron-down"
        onClick={() => {
          setCount(count - 1)
        }}
      />
    </div>
  );
}

export default App;
