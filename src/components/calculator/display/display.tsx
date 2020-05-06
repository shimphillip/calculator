import React from 'react'
import Container from './displayStyles'

interface DisplayProps {
  expression: string
  value: string
}

const Display = ({ value, expression }: DisplayProps) => {
  return (
    <Container>
      <div className="history">
        <span>{expression}</span>
      </div>
      <div className="display">{value}</div>
    </Container>
  )
}

export default Display
