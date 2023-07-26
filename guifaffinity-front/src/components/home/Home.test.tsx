import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { server } from "../../mocks/server.js";
import { rest } from "msw";
import { GifDTO } from "../../infrastructures/GifDTO";
import { Search } from "../../components/search";

describe("home component", () => {
  test("displays a gif", async () => {
    const retrievedGif: GifDTO = {
      id: "1",
      src: "https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif",
      likes: 15,
      date: "2023-06-02",
      alt: "Gato con gafas",
      tags: ["gato", "gafas"],
    };
    server.use(
      rest.get("http://localhost:3001/api/gifs", (req, res, ctx) => {
        return res(ctx.json([retrievedGif]));
      })
    );

    render(<Home />);
    const screenedGif = await screen.findByAltText("Gato con gafas");

    expect(screenedGif).toBeVisible();
  });

  test("display search input", () => {
    const dummyCallback = (searchInput: string) => {};
    render(<Search callback={dummyCallback} />);
    const screenedSearchInput = screen.getByPlaceholderText(
      "¿Qué quieres buscar? ¡Encuéntralo!"
    );

    expect(screenedSearchInput).toBeVisible();
  });
});
