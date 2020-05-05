import React from 'react'
import Container from './calculatorStyles'
import Display from './display/display'
import Pads from './pads/pads'

const Calculator = () => {
  // const texts = [
  //   'C',
  //   '%',
  //   'Back',
  //   '÷',
  //   '7',
  //   '8',
  //   '9',
  //   '×',
  //   '4',
  //   '5',
  //   '6',
  //   '-',
  //   '1',
  //   '2',
  //   '3',
  //   '+',
  //   '0',
  //   '.',
  //   'ha',
  //   '=',
  // ]

  return (
    <Container>
      <Display />
      <Pads />
    </Container>
  )
}

export default Calculator
