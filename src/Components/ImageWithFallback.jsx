import { useState } from "react";

export default function ImageWithFallback({ src, alt, ...props }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="bg-neutral-200 flex items-center justify-center h-full">
        <span className="text-neutral-500 text-sm">
          Image failed to load
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}