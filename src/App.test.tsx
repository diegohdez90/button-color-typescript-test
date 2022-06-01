import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const setup = () => render(<App />);

test('button has correct initial styles', () => {
  setup();
  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });

  expect(button).toHaveStyle({
    backgroundColor: 'red'
  });
});

test('button turns blue when is clicked', () => {
  setup();
  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });

  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: 'blue'
  });
  expect(button).toHaveTextContent('Change to red');
});
