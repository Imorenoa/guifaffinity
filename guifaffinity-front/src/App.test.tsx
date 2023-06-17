import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server.js";
import { rest } from "msw";

test("displays a gif", async () => {
  const retrievedGif = {
    id: "1",
    src: "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
    likes: 15,
    date: "2023-06-02",
    alt: "Gato con gafas",
    tags: ["gato", "gafas"]
  };
  server.use(
    rest.get("http://localhost:3000/gifs", (req, res, ctx) => {
      return res(ctx.json({ results: [retrievedGif] }));
    })
  );

  render(<App />);
  const screenedGif = await screen.findByAltText("Gato con gafas");

  expect(screenedGif).toBeVisible();
});

test("display logo", () => {
  render(<App />);
  const screenedLogo = screen.getByAltText("Logo Guifaffinity");

  expect(screenedLogo).toBeVisible();
});

test("display search input", () => {
  render(<App />);
  const screenedSearchInput = screen.getByPlaceholderText(
    "¿Qué quieres buscar? ¡Encuéntralo!"
  );

  expect(screenedSearchInput).toBeVisible();
});