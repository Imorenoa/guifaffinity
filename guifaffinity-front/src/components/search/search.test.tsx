import { render, screen } from "@testing-library/react";
import App from "../../app/App";

test("display search input", () => {
  render(<App />);
  const screenedSearchInput = screen.getByPlaceholderText(
    "¿Qué quieres buscar? ¡Encuéntralo!"
  );

  expect(screenedSearchInput).toBeVisible();
});
