
export const inputContainerStyles = "flex flex-col gap-1.5 w-full";

export const labelStyles = "text-sm font-medium text-slate-700 ml-1";

export const errorStyles = "text-xs text-red-500 mt-1 min-h-[1.25rem]";

export const getBaseInputStyles = (hasError: boolean): string => {
  const common = "w-full px-4 py-2.5 border rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400";

  const statusStyles = hasError
    ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
    : "border-slate-300 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return `${common} ${statusStyles}`;
};
