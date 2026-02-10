import React, { useRef, useState, useEffect, lazy, Suspense } from "react";

// Dynamically import the heavy Bottle3D component (splits Three.js into a separate chunk)
const Bottle3D = lazy(() => import("./Bottle3D"));

interface LazyBottle3DProps {
  className?: string;
  scale?: number;
  autoRotate?: boolean;
  showExport?: boolean;
  verticalOffset?: number;
}

const LazyBottle3D: React.FC<LazyBottle3DProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only need to trigger once
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before it enters viewport
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={props.className}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-lg">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cyan-500"></div>
                <p className="text-sm text-slate-400">Loading 3D model...</p>
              </div>
            </div>
          }
        >
          <Bottle3D {...props} className="w-full h-full" />
        </Suspense>
      ) : (
        // Lightweight placeholder before scroll
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-lg">
          <div className="w-16 h-32 rounded-full bg-gradient-to-b from-cyan-100 to-cyan-200 opacity-40 animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default LazyBottle3D;
