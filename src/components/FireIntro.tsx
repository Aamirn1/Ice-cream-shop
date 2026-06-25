'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FireIntroProps {
  onComplete: () => void
}

const sprinkleColors = [
  'radial-gradient(circle, hsl(335 100% 75%), hsl(335 90% 60%), hsl(335 80% 50%))',
  'radial-gradient(circle, hsl(280 100% 75%), hsl(280 90% 60%), hsl(280 80% 50%))',
  'radial-gradient(circle, hsl(195 100% 70%), hsl(195 90% 55%), hsl(195 80% 45%))',
  'radial-gradient(circle, hsl(45 100% 70%), hsl(45 95% 55%), hsl(45 90% 45%))',
  'radial-gradient(circle, hsl(160 70% 65%), hsl(160 60% 50%), hsl(160 50% 40%))',
]

function Sprinkle({ delay, left, size, duration, color }: { delay: number; left: string; size: number; duration: number; color: string }) {
  return (
    <div
      className="absolute top-0 rounded-full"
      style={{
        left,
        width: size,
        height: size,
        animation: `sprinkle-fall ${duration}s linear ${delay}s infinite`,
        background: color,
        filter: `blur(${size > 10 ? 2 : 0.5}px)`,
        opacity: 0.9,
      }}
    />
  )
}

function SparkleStar({ delay, left, duration }: { delay: number; left: string; duration: number }) {
  return (
    <div
      className="absolute top-0"
      style={{
        left,
        width: 4,
        height: 4,
        animation: `sprinkle-fall ${duration}s linear ${delay}s infinite`,
        background: 'hsl(45 100% 80%)',
        borderRadius: '50%',
        boxShadow: '0 0 6px hsl(45 100% 70%), 0 0 12px hsl(335 100% 60%)',
        opacity: 0.8,
      }}
    />
  )
}

export default function FireIntro({ onComplete }: FireIntroProps) {
  const [phase, setPhase] = useState<'icecream' | 'shop' | 'fadeout' | 'complete'>('icecream')

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('shop'), 1400)
    const timer2 = setTimeout(() => setPhase('fadeout'), 3800)
    const timer3 = setTimeout(() => onComplete(), 4800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  const sprinkles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 14,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
      color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
    })),
  [])

  const sparkles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 4,
    })),
  [])

  const icecreamLetters = 'ICE CREAM'.split('')
  const shopLetters = 'SHOP'.split('')

  const showShop = phase === 'shop' || phase === 'fadeout'

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: 'hsl(280 20% 6%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            if (phase === 'fadeout') setPhase('complete')
          }}
        >
          {/* Falling sprinkles */}
          <div className="absolute inset-0 pointer-events-none">
            {sprinkles.map((p) => (
              <Sprinkle key={p.id} {...p} />
            ))}
          </div>

          {/* Sparkle stars */}
          <div className="absolute inset-0 pointer-events-none">
            {sparkles.map((s) => (
              <SparkleStar key={`sparkle-${s.id}`} {...s} />
            ))}
          </div>

          {/* Large ambient glow at center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(335 80% 65% / 0.15), hsl(280 75% 65% / 0.08), transparent)',
              filter: 'blur(60px)',
              animation: 'fire-flicker 2s ease-in-out infinite',
            }}
          />

          {/* Secondary glow - cooler */}
          <div
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(195 85% 60% / 0.1), transparent)',
              filter: 'blur(40px)',
              animation: 'fire-flicker 2.5s ease-in-out infinite reverse',
            }}
          />

          {/* Ice cream cone emoji */}
          <motion.div
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.3, y: -50 }}
            animate={{ opacity: [0, 1, 0.9, 1], scale: [0.3, 1.3, 1, 1.1], y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ filter: 'drop-shadow(0 0 30px hsl(335 80% 65% / 0.9)) drop-shadow(0 0 60px hsl(280 75% 65% / 0.5))' }}
          >
            <span className="text-8xl">🍦</span>
          </motion.div>

          {/* Horizontal sweep line */}
          {showShop && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] z-10"
              style={{
                top: '50%',
                background: 'linear-gradient(90deg, transparent, hsl(335 80% 65%), hsl(280 75% 65%), hsl(195 85% 60%), hsl(280 75% 65%), hsl(335 80% 65%), transparent)',
                boxShadow: '0 0 20px hsl(335 80% 65% / 0.8), 0 0 40px hsl(335 80% 65% / 0.4)',
              }}
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 1, 0] }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          )}

          {/* Text */}
          <div className="relative z-10 flex flex-col items-center gap-1 mt-8">
            {/* ICE CREAM */}
            <div className="flex flex-wrap justify-center max-w-[90vw]">
              {icecreamLetters.map((letter, i) => (
                <motion.span
                  key={`icecream-${i}`}
                  className="text-5xl sm:text-7xl md:text-8xl font-serif font-black"
                  style={{
                    background: 'linear-gradient(135deg, hsl(335 80% 70%), hsl(280 75% 68%), hsl(195 85% 62%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  initial={{ opacity: 0, y: 60, scale: 0.3, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Glow behind text */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full -z-10"
              style={{
                background: 'radial-gradient(ellipse, hsl(335 80% 65% / 0.2), hsl(280 75% 65% / 0.1), transparent)',
                filter: 'blur(40px)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* SHOP */}
            <div className="flex">
              {shopLetters.map((letter, i) => (
                <motion.span
                  key={`shop-${i}`}
                  className="text-7xl sm:text-8xl md:text-9xl font-serif font-black"
                  style={{
                    background: 'linear-gradient(135deg, hsl(335 80% 70%), hsl(280 75% 68%), hsl(195 85% 62%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  initial={{ opacity: 0, y: 60, scale: 0.3, rotateX: -90 }}
                  animate={showShop
                    ? { opacity: 1, y: 0, scale: 1, rotateX: 0 }
                    : { opacity: 0, y: 60, scale: 0.3, rotateX: -90 }
                  }
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              className="text-foreground/60 text-base sm:text-lg tracking-[0.3em] uppercase mt-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={showShop
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Where Every Scoop Tells a Story
            </motion.p>
          </div>

          {/* Fade out overlay */}
          {phase === 'fadeout' && (
            <motion.div
              className="absolute inset-0 z-20"
              style={{ background: 'hsl(280 20% 6%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
