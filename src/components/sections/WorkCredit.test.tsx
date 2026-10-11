import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { WorkCredit as WorkCreditData } from "@/types";
import { WorkCredit } from "./WorkCredit";

const credit: WorkCreditData = {
  designer: "Jane Designer",
  sourceName: "MakerWorld",
  sourceUrl: "https://example.com/model",
  license: "CC0 (Public Domain)",
  licenseUrl: "https://example.com/license",
};

describe("WorkCredit", () => {
  it("shows the designer, the source link and the license link", () => {
    render(<WorkCredit credit={credit} isImageFromSource={false} />);
    expect(screen.getByText(/Jane Designer/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "MakerWorld" })).toHaveAttribute("href", "https://example.com/model");
    expect(screen.getByRole("link", { name: "CC0 (Public Domain)" })).toHaveAttribute(
      "href",
      "https://example.com/license",
    );
  });

  it("says the image comes from the source page only when it does", () => {
    const { rerender } = render(<WorkCredit credit={credit} isImageFromSource={false} />);
    expect(screen.queryByText(/kaynak sayfasındaki tanıtım görselidir/)).not.toBeInTheDocument();

    rerender(<WorkCredit credit={credit} isImageFromSource />);
    expect(screen.getByText(/kaynak sayfasındaki tanıtım görselidir/)).toBeInTheDocument();
  });

  it("shows the license as plain text when there is no license link", () => {
    render(<WorkCredit credit={{ ...credit, licenseUrl: undefined }} isImageFromSource={false} />);
    expect(screen.queryByRole("link", { name: "CC0 (Public Domain)" })).not.toBeInTheDocument();
    expect(screen.getByText(/CC0 \(Public Domain\)/)).toBeInTheDocument();
  });
});
