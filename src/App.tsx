import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const changeButtonColor = color === 'red' ? 'blue' : 'red';

  const onChangeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setColor(changeButtonColor)
  }

  const onChangeCheckedToDisableButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(Boolean(e.target.checked).valueOf())
  }

  return (
    <div>
      <button
        onClick={onChangeColor}
        style={{
          backgroundColor: color
        }}
        disabled={disabled}
      >Change to {changeButtonColor}</button>
      <div>
        <input
          id='checkbox-disabled-button'
          type="checkbox"
          name='checkbox'
          onChange={onChangeCheckedToDisableButton}
        />
        <label htmlFor="checkbox-disabled-button">Disable button</label>
      </div>
    </div>
  );
}

export default App;
