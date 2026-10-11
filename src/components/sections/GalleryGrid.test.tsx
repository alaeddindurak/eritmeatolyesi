import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { Work } from "@/types";
import { GalleryGrid } from "./GalleryGrid";

const makeWork = (slug: string, category: Work["category"]): Work => ({
  slug,
  title: `Work ${slug}`,
  category,
  summary: "Teaser",
  description: "Description",
  photos: [],
});

const works = [makeWork("a", "print"), makeWork("b", "model"), makeWork("c", "print")];

describe("GalleryGrid", () => {
  it("shows every work by default", () => {
    render(<GalleryGrid works={works} />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });

  it("filters by category and can show everything again", async () => {
    const user = userEvent.setup();
    render(<GalleryGrid works={works} />);

    await user.click(screen.getByRole("button", { name: "Model ve Render" }));
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Model ve Render" })).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "Tümü" }));
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });

  it("shows a message when a category is empty", async () => {
    const user = userEvent.setup();
    render(<GalleryGrid works={[makeWork("a", "print")]} />);

    await user.click(screen.getByRole("button", { name: "Model ve Render" }));
    expect(screen.getByText("Bu kategoride henüz bir iş yok.")).toBeInTheDocument();
  });
});
