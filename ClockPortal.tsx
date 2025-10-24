import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export function ClockPortal() {
  return (
    <div className="relative flex items-center justify-center min-h-[600px] py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(103, 232, 249, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main clock portal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Rotating outer ring with decorative elements */}
        <motion.div
          className="relative w-80 h-80 rounded-full border-4 border-[var(--copper)] flex items-center justify-center"
          style={{
            boxShadow: '0 0 30px rgba(184, 115, 51, 0.3), inset 0 0 30px rgba(184, 115, 51, 0.1)',
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-[var(--copper)]"
              style={{
                top: '10px',
                left: '50%',
                transformOrigin: 'center 150px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Inner portal circle */}
          <motion.div
            className="absolute w-64 h-64 rounded-full paper-texture flex items-center justify-center"
            style={{
              boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.2)',
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Clock icon */}
            <Clock className="w-24 h-24 text-[var(--copper)] opacity-70" strokeWidth={1.5} />
          </motion.div>

          {/* Decorative gears around the portal */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg) translateX(140px) translateY(-50%)`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[var(--copper)] opacity-60"
                  fill="currentColor"
                >
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
                  {[...Array(8)].map((_, i) => (
                    <rect
                      key={i}
                      x="47"
                      y="10"
                      width="6"
                      height="15"
                      rx="2"
                      transform={`rotate(${i * 45} 50 50)`}
                    />
                  ))}
                  <circle cx="50" cy="50" r="15" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl mb-4 text-[var(--copper)]">
            Timeless Voyage
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto px-4">
            Where every artifact holds a story from the past,
            <br />
            and every purchase is a journey through time.
          </p>
        </motion.div>

        {/* Holographic accent lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px holographic-line opacity-30" />
        <div className="absolute top-1/2 left-0 right-0 h-px holographic-line opacity-30 transform translate-y-2" />
      </div>
    </div>
  );
}
