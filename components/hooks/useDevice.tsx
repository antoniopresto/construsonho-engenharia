import { useWidth } from "./useWidth";
export const MOBILE_WITH_LIMIT = 767;

export function useDevice() {
  const { width = 350 } = useWidth();
  const isMobile = width <= MOBILE_WITH_LIMIT;
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
}
