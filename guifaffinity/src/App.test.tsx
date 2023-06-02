import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server.js'
import { rest } from 'msw';

test('displays a gif', () => {
  // hay que crear un gif con texto alternativo "anAlternativeText"
  const retrievedGif = {
    "name": "1",
    "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
    "likes": 15,
    "date": "2023-06-02",
    "alt": "anAlternativeText"
  }
  // Hay que mockear la llamada de petición de gifs
  server.use(
    rest.get('/gifs', (req, res, ctx) => {
      return res(
        ctx.json({retrievedGif})
      )
    }),
  )
  render(<App />);
  // obtenemos el gif mediante su texto alternativo
  const screenedGif = screen.getByAltText("anAlternativeText")
  
  // corroboramos que el gif es visible
  expect(screenedGif).toBeVisible();
});
