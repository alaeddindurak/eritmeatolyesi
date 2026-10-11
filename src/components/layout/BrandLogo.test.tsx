import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "./BrandLogo";

describe("BrandLogo", () => {
  it("shows the logo image and the brand name by default", () => {
    render(<BrandLogo />);
    expect(screen.getByText(siteConfig.name)).toBeInTheDocument();
  });

  it("hides the name and gives the image a text alternative when showName is false", () => {
    render(<BrandLogo showName={false} />);
    expect(screen.queryByText(siteConfig.name)).not.toBeInTheDocument();
    expect(screen.getByRole("img", { name: `${siteConfig.name} logosu` })).toBeInTheDocument();
  });
});
