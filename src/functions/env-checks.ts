// Check if Node.js is running: Example: isNodeJS() => true
export const isNodeJS = (): boolean => typeof process === "object";

// Check if the browser is running: Example: isBrowser() => true
export const isBrowser = (): boolean => typeof window === "object";

// Check if the mobile device is running: Example: isMobile() => true
export const isMobile = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent);
};

// Check if the desktop device is running: Example: isDesktop() => true
export const isDesktop = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return !isMobile();
};
