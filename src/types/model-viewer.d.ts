import type { DetailedHTMLProps, HTMLAttributes } from "react";

/** Attributes of the <model-viewer> web component that this site uses. */
interface ModelViewerAttributes {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: "auto" | "lazy" | "eager";
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "touch-action"?: string;
  "shadow-intensity"?: string;
  "environment-image"?: string;
}

// Teaches TypeScript that <model-viewer> is a valid JSX tag.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ModelViewerAttributes;
    }
  }
}
