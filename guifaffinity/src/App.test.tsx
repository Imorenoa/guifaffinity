import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server.js";
import { rest } from "msw";

test("displays a gif", async () => {
  // hay que crear un gif con texto alternativo "anAlternativeText"
  const retrievedGif = {
    name: "1",
    src: "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
    likes: 15,
    date: "2023-06-02",
    alt: "Gato con gafas",
  };

  // Hay que mockear la llamada de petición de gifs
  server.use(
    rest.get("http://localhost:3000/gifs", (req, res, ctx) => {
      return res(ctx.json({ results: [retrievedGif] }));
    })
  );
  render(<App />);
  // obtenemos el gif mediante su texto alternativo
  const screenedGif = await screen.findByAltText("Gato con gafas");

  // corroboramos que el gif es visible
  expect(screenedGif).toBeVisible();
});
