import React, { useEffect, useRef } from 'react'
import Container from './displayStyles'

interface DisplayProps {
  expression: string
  value: string
}

const Display = ({ value, expression }: DisplayProps) => {
  const wave = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const runAnimation = () => {
      if (wave && wave.current) {
        wave.current.classList.add('animate')
        setTimeout(() => {
          if (wave && wave.current) {
            wave.current.classList.remove('animate')
          }
        }, 550)
      }
    }

    runAnimation()
  }, [value, expression])

  return (
    <Container>
      <div className="history">
        <span>{expression}</span>
      </div>
      <div className="display">{value}</div>
      <div className="wave" ref={wave}></div>
    </Container>
  )
}

export default Display
