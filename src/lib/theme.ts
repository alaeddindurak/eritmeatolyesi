/** Light / dark color themes supported by the site. */
export type Theme = "light" | "dark";

/** localStorage key that remembers the visitor's choice. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Tiny script placed in <head> (see layout.tsx). It runs before the page is painted and sets
 * <html data-theme="..."> from the saved choice. Unlike a typical site, the DEFAULT is dark
 * (the brand is dark), not the system setting. Doing this early avoids a flash of the wrong
 * theme. It contains no user input.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}})();`;
