import React from 'react'
import Container from './padStyles'

interface PadProps {
  children: React.ReactNode
  color?: 'bright'
}

const Pad = ({ children, color }: PadProps) => {

  return <Container color={color}>{children}</Container>
}

export default Pad
