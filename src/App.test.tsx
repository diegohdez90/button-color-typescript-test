import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';
import { MEDIUM_VIOLET_RED, MEDIUM_VIOLET_RED_SPACES, MIDNIGHT_BLUE, MIDNIGHT_BLUE_SPACES } from './constants';

const setup = () => render(<App />);

test('button has correct initial styles', () => {
  setup();
  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
  });

  expect(button).toHaveStyle({
    backgroundColor: MEDIUM_VIOLET_RED
  });
});

test('button turns midnight blue when is clicked', () => {
  setup();
  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
  });

  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: MIDNIGHT_BLUE
  });
  expect(button).toHaveTextContent(`Change to ${MEDIUM_VIOLET_RED_SPACES}`);
});

test('initial conditions', () => {
  setup();
  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
  });

  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Disabled button', () => {
  setup();

  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
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


test('Click on disabled change background color to gray when is medium violet red, and revert it to medium violet red', () => {
  setup();

  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
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
    backgroundColor: MEDIUM_VIOLET_RED
  });
});

test('Click on disabled change background color to gray when is midnight blue, and revert it to midnight blue', () => {
  setup();

  const button = screen.getByRole('button', {
    name: `Change to ${MIDNIGHT_BLUE_SPACES}`
  });
  expect(button).toBeEnabled();

  fireEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: MIDNIGHT_BLUE
  });
  expect(button).toHaveTextContent(`Change to ${MEDIUM_VIOLET_RED_SPACES}`);

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
    backgroundColor: MIDNIGHT_BLUE
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
});
