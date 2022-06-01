import React, { useState } from 'react';
import './App.css';
import { MEDIUM_VIOLET_RED, MIDNIGHT_BLUE } from './constants';

export function replaceCamelCaseWithSpaces (colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [color, setColor] = useState(MEDIUM_VIOLET_RED);
  const [disabled, setDisabled] = useState(false);

  const changeButtonColor = color === MEDIUM_VIOLET_RED ? MIDNIGHT_BLUE : MEDIUM_VIOLET_RED;

  const onChangeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setColor(changeButtonColor)
  }

  const onChangeCheckedToDisableButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = Boolean(e.target.checked).valueOf();
    setDisabled(isChecked)
  }

  return (
    <div>
      <button
        onClick={onChangeColor}
        style={{
          backgroundColor: disabled ? 'gray' : color
        }}
        disabled={disabled}
      >Change to {replaceCamelCaseWithSpaces(changeButtonColor)}</button>
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
