import React from 'react'
import Container from './padsStyles'
import Pad from './pad/pad'
import { Digit, Operator } from '../../../lib/types'

interface PadsProps {
  handleDigitClick: (digit: Digit) => void
  handleOperatorClick: (operator: Operator) => void
  handleEqualClick: () => void
  handleClear: () => void
  onPointButtonClick: () => void
}

const Pads = ({
  handleDigitClick,
  handleOperatorClick,
  handleEqualClick,
  handleClear,
  onPointButtonClick,
}: PadsProps) => {
  return (
    <Container>
      <Pad onClick={handleClear} color={'bright'} span>
        AC
      </Pad>
      <Pad onClick={() => handleOperatorClick('%')} color={'bright'}>
        %
      </Pad>
      <Pad onClick={() => handleOperatorClick('÷')} color={'bright'}>
        ÷
      </Pad>
      <Pad onClick={() => handleDigitClick(7)}>7</Pad>
      <Pad onClick={() => handleDigitClick(8)}>8</Pad>
      <Pad onClick={() => handleDigitClick(9)}>9</Pad>
      <Pad onClick={() => handleOperatorClick('×')} color={'bright'}>
        ×
      </Pad>
      <Pad onClick={() => handleDigitClick(4)}>4</Pad>
      <Pad onClick={() => handleDigitClick(5)}>5</Pad>
      <Pad onClick={() => handleDigitClick(6)}>6</Pad>
      <Pad onClick={() => handleOperatorClick('-')} color={'bright'}>
        -
      </Pad>
      <Pad onClick={() => handleDigitClick(1)}>1</Pad>
      <Pad onClick={() => handleDigitClick(2)}>2</Pad>
      <Pad onClick={() => handleDigitClick(3)}>3</Pad>
      <Pad onClick={() => handleOperatorClick('+')} color={'bright'}>
        +
      </Pad>
      <Pad onClick={() => handleDigitClick(0)}>0</Pad>
      <Pad onClick={onPointButtonClick}>.</Pad>
      <Pad onClick={handleEqualClick} color={'bright'} span>
        =
      </Pad>
    </Container>
  )
}

export default Pads
