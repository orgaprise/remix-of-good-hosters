import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images (LCP)
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  onLoad?: () => void;
  sizes?: string; // Responsive sizes hint
}

/**
 * OptimizedImage - Performance-optimized image component
 * 
 * Features:
 * - Native lazy loading with Intersection Observer fallback
 * - Blur placeholder animation
 * - Proper loading/decoding attributes for Core Web Vitals
 * - Priority loading for LCP images
 * - Automatic aspect ratio handling
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  aspectRatio,
  objectFit = "cover",
  onLoad,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
  };

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-muted/50",
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-muted to-muted/50 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        aria-hidden="true"
      />

      {/* Skeleton loader animation */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
          }}
          aria-hidden="true"
        />
      )}

      {/* Actual image - only render src when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          className={cn(
            "w-full h-full transition-opacity duration-500",
            objectFitClasses[objectFit],
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
