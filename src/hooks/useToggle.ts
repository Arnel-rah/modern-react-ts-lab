import { useState, useCallback } from "react";

/**
 * Hook pour gérer un état booléen (on/off)
 * @param defaultValue Valeur initiale (défaut: false)
 * @returns [value, toggle, setTrue, setFalse]
 */
export const useToggle = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse] as const;
};
