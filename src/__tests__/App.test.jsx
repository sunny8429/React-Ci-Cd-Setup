import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App';

test('render App component', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toHaveTextContent(/hello world/i);
});