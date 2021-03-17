// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// const shadow = {
//   boxShadow: '0 0 10px 10px #eaeaea',
//   padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
// };




function App() {
  const [count, setCount] = useState(2)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)
  return (
    <div className="container" /*style={shadow}*/> 
      {console.log('render')}
      <div className="chevron chevron-up"
        style={{
          visibility: count >= 3 && 'hidden',
        }}
        onClick={handleIncrement}
      />
      <div className="number">{count}</div>
      <div className="chevron chevron-down"
        style={{
          visibility: count <= 0 && 'hidden',
        }}
        onClick={handleDecrement}
      />
    </div>
  );
}

export default App;
