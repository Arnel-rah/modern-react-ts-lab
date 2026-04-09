import { useState } from "react";
import {
  baseStyles,
  sizeMapping,
  getDeterministicBg,
  type AvatarSize
} from "./Avatar.styles";

interface AvatarProps {
  src?: string;
  alt?: string;
  name: string;
  size?: AvatarSize;
}

const Avatar = ({ src, alt, name, size = "md" }: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  const sizeClass = sizeMapping[size];
  const bgClass = getDeterministicBg(name);
  const showFallback = !src || hasError;

  return (
    <div className={`${baseStyles} ${sizeClass} ${showFallback ? bgClass : ""}`}>
      {src && !hasError ? (
        <img
          src={src}
          alt={alt || name}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
