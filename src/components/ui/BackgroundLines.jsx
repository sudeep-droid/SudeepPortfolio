import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const BackgroundLines = ({ children, className, svgOptions }) => {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-transparent", className)}>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         <svg
          className="absolute inset-0 w-full h-full text-white/30 opacity-100 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
        >
          {paths.map((path, idx) => (
            <motion.path
              key={`path-${idx}`}
              d={path}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0], // Draw in, stay, draw out
                opacity: [0, 1, 1, 0],
                pathOffset: [0, 0, 1, 1]
              }}
              transition={{
                duration: Math.random() * 5 + 5, // 5-10s
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Generate some nice wavy paths
const paths = [
  "M0 400 Q 400 300 800 400 T 1600 400",
  "M0 500 Q 400 400 800 500 T 1600 500",
  "M0 300 Q 400 200 800 300 T 1600 300",
  "M0 600 Q 400 500 800 600 T 1600 600",
  "M0 200 Q 400 100 800 200 T 1600 200",
  // Diagonal vibes
  "M-100 800 Q 400 400 800 0 T 1600 -400",
   "M-100 600 Q 400 200 800 -200 T 1600 -600",
]
