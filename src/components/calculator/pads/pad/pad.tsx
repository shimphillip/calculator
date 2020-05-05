import React from 'react'
import Container from './padStyles'

interface PadProps {
  children: React.ReactNode
  color?: 'bright'
  span?: boolean
}

const Pad = ({ children, color, span }: PadProps) => {

  return <Container color={color} span={span}>{children}</Container>
}

export default Pad
