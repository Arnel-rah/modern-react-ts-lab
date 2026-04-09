
export type AvatarSize = "sm" | "md" | "lg" | "xl";

export const sizeMapping: Record<AvatarSize, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-xl",
  xl: "w-24 h-24 text-2xl",
};

export const baseStyles = "inline-flex items-center justify-center font-bold text-white rounded-full overflow-hidden uppercase select-none";


export const getDeterministicBg = (name: string): string => {
  const colors = [
    "bg-blue-500", "bg-emerald-500", "bg-violet-500",
    "bg-amber-500", "bg-rose-500", "bg-indigo-500"
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
};
