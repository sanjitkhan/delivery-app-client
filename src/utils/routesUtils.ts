export const getBaseUrl = (url: string, tabName: string): string => {
  return url.slice(0, url.lastIndexOf(tabName) - 1);
}