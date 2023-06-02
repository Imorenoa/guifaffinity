import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('displays a gif', () => {
  render(<App />);
  const gifs = screen.getAllByRole('img', {name: 'gif'});
  expect(gifs).toHaveLength(3);
});
