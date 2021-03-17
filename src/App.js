import logo from './logo.svg';
import './App.css';

const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};


function App() {
  return (
    <div className="container" style={shadow}>
      <input maxLength="10"></input>
      <div className="chevron chevron-up" />
      <div className="number">256</div>
      <div className="chevron chevron-down" />
    </div>
  );
}

export default App;
