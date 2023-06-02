// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/gifs', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "gifs": [
        {
          "name": "1",
          "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
          "likes": 15,
          "date": "2023-06-02"
        },
        {
          "name": "2",
          "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
          "likes": 5,
          "date": "2023-06-01"
        },
        {
          "name": "3",
          "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
          "likes": 10,
          "date": "2023-06-04"
        },
        {
          "name": "4",
          "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
          "likes": 11,
          "date": "2023-06-03"
        },
        {
          "name": "5",
          "src": "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
          "likes": 12,
          "date": "2023-03-02"
        }]
      }),
    )
  }),

  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]