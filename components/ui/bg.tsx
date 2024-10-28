"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TilesComponent: React.FC<{
  className?: string;
}> = ({ className }) => {
  const [dimensions, setDimensions] = useState({ size: 0, rows: 0, cols: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Math.min(width, height) / 14; // Adjust this divisor to change the number of tiles
      const rows = Math.ceil(height / size);
      const cols = Math.ceil(width / size);
      setDimensions({ size, rows, cols });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className={cn("relative z-0 overflow-hidden", className)}>
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${dimensions.cols}, ${dimensions.size}px)`,
          gridTemplateRows: `repeat(${dimensions.rows}, ${dimensions.size}px)`,
        }}
      >
        {Array.from({ length: dimensions.rows * dimensions.cols }).map(
          (_, i) => (
            <motion.div
              key={i}
              whileHover={{
                backgroundColor: `var(--tile)`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              className="relative border-r border-t border-neutral-200 dark:border-neutral-900"
              style={{
                width: `${dimensions.size}px`,
                height: `${dimensions.size}px`,
              }}
            />
          ),
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export const Tiles = React.memo(TilesComponent);
