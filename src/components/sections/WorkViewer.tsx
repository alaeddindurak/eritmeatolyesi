"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/base-path";

interface WorkViewerProps {
  /** Path of the .glb file inside `public/`, e.g. "/models/dragon.glb". */
  src: string;
  /** Text description of the model for screen readers. */
  alt: string;
}

/**
 * Interactive 3D viewer: visitors can rotate (drag), zoom (scroll / pinch) and look at a model
 * from every side. It wraps Google's <model-viewer> web component.
 *
 * The component is only loaded in the browser (dynamic import below), because it needs WebGL
 * and `window`. Until it is ready a simple loading box is shown.
 */
export function WorkViewer({ src, alt }: WorkViewerProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isActive = true;
    import("@google/model-viewer").then(() => {
      if (isActive) setIsReady(true);
    });
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="border-line bg-card aspect-square w-full overflow-hidden rounded-3xl border">
      {isReady ? (
        <model-viewer
          src={withBasePath(src)}
          alt={alt}
          camera-controls
          auto-rotate
          loading="lazy"
          touch-action="pan-y"
          shadow-intensity="1"
          // "neutral" is built into the viewer, so no lighting file is downloaded from another site.
          environment-image="neutral"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div className="text-muted flex h-full items-center justify-center text-sm" role="status">
          3D görüntüleyici yükleniyor...
        </div>
      )}
    </div>
  );
}
