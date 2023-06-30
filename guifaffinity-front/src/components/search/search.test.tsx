import { render, screen } from "@testing-library/react";
import { App } from "../../app/App";
import { FetchGifsRepository } from "../../infrastructures/FetchGifsRepository";

test("display search input", () => {
  const gifsRepository = new FetchGifsRepository();
  render(<App gifsRepository={gifsRepository} />);
  const screenedSearchInput = screen.getByPlaceholderText(
    "¿Qué quieres buscar? ¡Encuéntralo!"
  );

  expect(screenedSearchInput).toBeVisible();
});
