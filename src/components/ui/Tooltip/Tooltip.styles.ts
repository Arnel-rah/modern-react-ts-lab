export type TooltipPosition = "top" | "bottom" | "left" | "right";

export const tooltipContainer = "relative inline-block";

export const tooltipBoxBase =
  "absolute z-50 px-2 py-1 text-xs text-white bg-slate-800 rounded shadow-lg whitespace-nowrap transition-opacity duration-200 pointer-events-none";

export const positionMapping: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};
