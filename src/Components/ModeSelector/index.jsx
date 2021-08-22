import React from 'react';

import './style.css';

const ModeSelector = ({ onSelect }) => {
  const small =
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const big =
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  return (
    <>
      <h1>Какое количество элементов вы хотите загрузить?</h1>
      <div className="buttons">
        <button onClick={() => onSelect(small)} className="btn btn-success">
          32 Elems
        </button>
        <button onClick={() => onSelect(big)} className="btn btn-danger">
          1000 elems
        </button>
      </div>
    </>
  );
};

export default ModeSelector;
