// src/mocks/handlers.js
import { rest } from 'msw'
import gifs from 'assets/gifs.json'

export const handlers = [
  rest.get('/gifs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({gifs}),
    )
  }),
]