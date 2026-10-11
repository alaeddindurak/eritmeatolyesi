import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Work } from "@/types";
import { WorkCard } from "./WorkCard";

const work: Work = {
  slug: "demo-work",
  title: "Demo Work",
  category: "print",
  summary: "A short teaser.",
  description: "A longer description.",
  photos: [],
};

describe("WorkCard", () => {
  it("links to the detail page and shows title, teaser and category", () => {
    render(<WorkCard work={work} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/gallery/demo-work");
    expect(screen.getByRole("heading", { name: "Demo Work" })).toBeInTheDocument();
    expect(screen.getByText("A short teaser.")).toBeInTheDocument();
    expect(screen.getByText("3D Baskı")).toBeInTheDocument();
  });

  it("mentions the 3D viewer only when the work has a model", () => {
    const { rerender } = render(<WorkCard work={work} />);
    expect(screen.queryByText("3D görüntülenebilir")).not.toBeInTheDocument();

    rerender(<WorkCard work={{ ...work, model: "/models/demo.glb" }} />);
    expect(screen.getByText("3D görüntülenebilir")).toBeInTheDocument();
  });
});
