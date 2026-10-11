import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

// The header reads the current route; tests pretend we are on a work detail page.
vi.mock("next/navigation", () => ({ usePathname: () => "/gallery/ornek-baski/" }));

describe("Header", () => {
  it("links the brand logo to the home page", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Eritme Atölyesi ana sayfa" })).toHaveAttribute("href", "/");
  });

  it("opens and closes the mobile menu with the hamburger button", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("navigation", { name: "Mobil menü" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Menüyü aç" }));
    expect(screen.getByRole("navigation", { name: "Mobil menü" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Menüyü kapat" }));
    expect(screen.queryByRole("navigation", { name: "Mobil menü" })).not.toBeInTheDocument();
  });

  it("keeps the gallery link active on a work detail page", () => {
    render(<Header />);
    const [gallery] = screen.getAllByRole("link", { name: "Vitrin" });
    expect(gallery).toHaveAttribute("aria-current", "page");
  });
});
