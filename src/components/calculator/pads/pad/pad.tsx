import React from 'react'
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
      {children}
    </Container>
  )
}

export default Pad
