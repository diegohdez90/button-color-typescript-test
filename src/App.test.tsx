import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';

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

test('initial conditions', () => {
  setup();
  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });

  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Disabled button', () => {
  setup();

  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button'
  });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();

});


test('Click on disabled change background color to gray when is red, and revert it to red', () => {
  setup();

  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button'
  });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({
    backgroundColor: 'gray'
  });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({
    backgroundColor: 'red'
  });
});

test('Click on disabled change background color to gray when is blue, and revert it to blue', () => {
  setup();

  const button = screen.getByRole('button', {
    name: 'Change to blue'
  });
  expect(button).toBeEnabled();

  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: 'blue'
  });
  expect(button).toHaveTextContent('Change to red');

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button'
  });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({
    backgroundColor: 'gray'
  });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({
    backgroundColor: 'blue'
  });
});


describe('spaces before camel case capital letter', () => {
  test('should works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  test('should works for a least one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('should works for multiple capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})