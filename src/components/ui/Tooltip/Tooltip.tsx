import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  positionMapping,
  tooltipBoxBase,
  tooltipContainer,
  type TooltipPosition,
} from "./Tooltip.styles";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: TooltipPosition;
  delay?: number;
}

const Tooltip = ({
  children,
  content,
  position = "top",
  delay = 300,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      {isVisible && (
        <div className={`${tooltipBoxBase} ${positionMapping[position]}`}>
          {content}
          <div
            className="absolute w-2 h-2 bg-slate-800 rotate-45 -z-10"
            style={{
              bottom: position === "top" ? "-4px" : "auto",
              top: position === "bottom" ? "-4px" : "auto",
              left:
                position === "top" || position === "bottom" ? "50%" : "auto",
              transform:
                position === "top" || position === "bottom"
                  ? "translateX(-50%) rotate(45deg)"
                  : "rotate(45deg)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
