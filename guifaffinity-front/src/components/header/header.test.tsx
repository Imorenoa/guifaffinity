import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("display logo", () => {
  render(<Header />);
  const screenedLogo = screen.getByAltText("Logo Guifaffinity");

  expect(screenedLogo).toBeVisible();
});
