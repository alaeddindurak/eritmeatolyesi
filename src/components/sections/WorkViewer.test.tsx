import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WorkViewer } from "./WorkViewer";

// The real library needs WebGL, which jsdom does not have, so it is replaced by an empty module.
vi.mock("@google/model-viewer", () => ({}));

describe("WorkViewer", () => {
  it("shows a loading box first and then the <model-viewer> element with the model", async () => {
    const { container } = render(<WorkViewer src="/models/demo.glb" alt="Demo model" />);
    expect(screen.getByText("3D görüntüleyici yükleniyor...")).toBeInTheDocument();

    await waitFor(() => expect(container.querySelector("model-viewer")).not.toBeNull());
    const viewer = container.querySelector("model-viewer");
    expect(viewer).toHaveAttribute("src", "/models/demo.glb");
    expect(viewer).toHaveAttribute("alt", "Demo model");
    expect(viewer).toHaveAttribute("camera-controls");
  });
});
