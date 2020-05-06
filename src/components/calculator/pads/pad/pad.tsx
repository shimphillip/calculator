import React from 'react'
import { motion } from 'framer-motion'
import Container from './padStyles'

interface PadProps {
  children: React.ReactNode
  color?: 'bright'
  span?: boolean
  onClick?: () => void
}

const Pad = ({ children, color, span, onClick }: PadProps) => {
  return (
    <Container color={color} span={span} onClick={onClick}>
      <motion.div
        whileTap={{ scale: 0.6 }}
        whileHover={{ rotate: 20, transition: { duration: 0.5 } }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    </Container>
  )
}

export default Pad
