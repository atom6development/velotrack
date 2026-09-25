export const MAP_CENTER = [-47.93, -15.8];
export const MAP_ZOOM = 10;

const STYLES = {
  light: "https://tiles.openfreemap.org/styles/positron",
  dark: "https://tiles.openfreemap.org/styles/dark",
};

export function getMapStyle(theme) {
  return STYLES[theme] ?? STYLES.dark;
}

export function getMapPadding() {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  return isDesktop
    ? { top: 80, right: 80, bottom: 80, left: 440 }
    : { top: 64, right: 40, bottom: window.innerHeight / 2 + 32, left: 40 };
}
