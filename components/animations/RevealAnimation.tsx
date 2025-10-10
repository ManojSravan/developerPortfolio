// components/animations/RevealAnimation.tsx
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'
type AnimationType = 'slide' | 'fade' | 'scale' | 'blur'

interface RevealAnimationProps {
  children: ReactNode
  type?: AnimationType
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  exit?: boolean
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  type = 'slide',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  exit = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10%' })

  const getVariants = () => {
    const base = { opacity: 0 }
    const visible = { opacity: 1 }
    
    switch (type) {
      case 'slide':
        return {
          hidden: {
            ...base,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
          },
          visible: { ...visible, x: 0, y: 0 },
          exit: exit ? {
            opacity: 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
          } : {},
        }
      
      case 'scale':
        return {
          hidden: { ...base, scale: 0.8 },
          visible: { ...visible, scale: 1 },
          exit: exit ? { opacity: 0, scale: 0.8 } : {},
        }
      
      case 'blur':
        return {
          hidden: { ...base, filter: 'blur(4px)' },
          visible: { ...visible, filter: 'blur(0px)' },
          exit: exit ? { opacity: 0, filter: 'blur(4px)' } : {},
        }
      
      default: // fade
        return {
          hidden: base,
          visible,
          exit: exit ? { opacity: 0 } : {},
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : (exit ? 'exit' : 'hidden')}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default RevealAnimation

// Usage:
// <RevealAnimation type="slide" direction="up" delay={0.2}>
//   <h1>Title</h1>
// </RevealAnimation>