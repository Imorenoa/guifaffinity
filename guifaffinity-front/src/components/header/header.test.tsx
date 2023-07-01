import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("header component", () => {
  test("display logo", () => {
    render(<Header />);
    const screenedLogo = screen.getByAltText("Logo Guifaffinity");

    expect(screenedLogo).toBeVisible();
  });
});
