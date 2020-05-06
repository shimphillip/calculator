import React, { useState } from 'react'
import Container from './calculatorStyles'
import Display from './display/display'
import Pads from './pads/pads'
import { Digit, Operator } from '../../lib/types'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [result, setResult] = useState(0)
  const [waitingForOperand, setWaitingForOperand] = useState(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()

  console.log('display', display)
  console.log('result', result)
  console.log('waitingForOperand', waitingForOperand)
  console.log('pendingOperator', pendingOperator)
  console.log('\n')

  const calculate = (rightOperand: number, pendingOperator: Operator) => {
    let newResult = result

    switch (pendingOperator) {
      case '+':
        newResult += rightOperand
        break
      case '-':
        newResult -= rightOperand
        break
      case '×':
        newResult *= rightOperand
        break
      case '÷':
        if (rightOperand === 0) {
          return false
        }

        newResult /= rightOperand
    }

    setResult(newResult)
    setDisplay(newResult.toString().toString().slice(0, 12))

    return true
  }

  const handleDigitClick = (digit: Digit) => {
    let newDisplay = display

    if ((display === '0' && digit === 0) || display.length > 11) {
      return
    }

    if (waitingForOperand) {
      newDisplay = ''
      setWaitingForOperand(false)
    }

    if (display !== '0') {
      newDisplay = newDisplay + digit.toString()
    } else {
      newDisplay = digit.toString()
    }

    setDisplay(newDisplay)
  }

  const handleOperatorClick = (operator: Operator) => {
    const operand = Number(display)

    // if we have an operator and not waiting for operand, calculate
    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }
      // don't continue after calculate is finished
    } else {
      setResult(operand)
    }

    setPendingOperator(operator)
    setWaitingForOperand(true)
  }

  const handleEqualClick = () => {
    const operand = Number(display)

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }

      setPendingOperator(undefined)
    } else {
      setDisplay(operand.toString())
    }

    setResult(operand)
    setWaitingForOperand(true)
  }

  const handleClear = () => {
    setResult(0)
    setPendingOperator(undefined)
    setDisplay('0')
    setWaitingForOperand(true)
  }

  return (
    <Container>
      <Display
        value={display}
        expression={
          typeof pendingOperator !== 'undefined'
            ? `${result}${pendingOperator}${waitingForOperand ? '' : display}`
            : ''
        }
      />
      <Pads
        handleDigitClick={handleDigitClick}
        handleOperatorClick={handleOperatorClick}
        handleEqualClick={handleEqualClick}
        handleClear={handleClear}
      />
    </Container>
  )
}

export default Calculator
