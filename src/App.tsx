import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('red')

  const changeButtonColor = color === 'red' ? 'blue' : 'red';

  const onChangeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setColor(changeButtonColor)
  }

  return (
    <div>
      <button
        onClick={onChangeColor}
        style={{
          backgroundColor: color
        }}
      >Change to {changeButtonColor}</button>
      <div>
        <input type="checkbox" name='checkbox'/>
      </div>
    </div>
  );
}

export default App;
