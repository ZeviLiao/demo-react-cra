import { useState } from 'react';
import CardFooter from './CardFooter';
import UnitControl from './UnitControl';
import './SpeedConverter.css';

const SpeedConverter = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" className="input-number" min="0"
              onChange={handleInputChange}
              value={inputValue}
            />
          </div>
          <span
            className="angle-icon fa-2x"
            style={{
              marginTop: 30,
            }}
          >
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              className="input-number text-right"
              type="text"
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
};

export default SpeedConverter;
