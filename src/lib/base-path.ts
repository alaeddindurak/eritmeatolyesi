/**
 * Path prefix of the published site (e.g. "/eritmeatolyesi"), set in next.config.ts.
 * It is empty during development.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Adds the site prefix to a path of a file in `public/` (images, 3D models).
 * `next/link` does this automatically, but plain <img>, next/image and <model-viewer> do not.
 * Full URLs and paths that do not start with "/" are returned unchanged.
 */
export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
