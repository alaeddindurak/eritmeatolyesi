import { afterEach, describe, expect, it, vi } from "vitest";

describe("withBasePath", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("adds the site prefix to paths of files in public/", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/eritmeatolyesi");
    const { withBasePath } = await import("./base-path");
    expect(withBasePath("/models/demo.glb")).toBe("/eritmeatolyesi/models/demo.glb");
  });

  it("leaves full URLs unchanged", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/eritmeatolyesi");
    const { withBasePath } = await import("./base-path");
    expect(withBasePath("https://example.com/a.png")).toBe("https://example.com/a.png");
  });

  it("adds nothing when no prefix is configured (development)", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "");
    const { withBasePath } = await import("./base-path");
    expect(withBasePath("/photos/a.jpg")).toBe("/photos/a.jpg");
  });
});
