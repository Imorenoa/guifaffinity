import { render, screen } from "@testing-library/react";
import App from "../../app/App";

test("display logo", () => {
  render(<App />);
  const screenedLogo = screen.getByAltText("Logo Guifaffinity");

  expect(screenedLogo).toBeVisible();
});