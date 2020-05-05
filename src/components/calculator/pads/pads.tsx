import React from 'react'
import Container from './padsStyles'
import Pad from './pad/pad'

const Pads = () => {
  return (
    <Container>
      <Pad color={'bright'}>C</Pad>
      <Pad color={'bright'}>%</Pad>
      <Pad color={'bright'}>{'<='}</Pad>
      <Pad color={'bright'}>÷</Pad>
      <Pad>7</Pad>
      <Pad>8</Pad>
      <Pad>9</Pad>
      <Pad color={'bright'}>×</Pad>
      <Pad>4</Pad>
      <Pad>5</Pad>
      <Pad>6</Pad>
      <Pad color={'bright'}>-</Pad>
      <Pad>1</Pad>
      <Pad>2</Pad>
      <Pad>3</Pad>
      <Pad color={'bright'}>+</Pad>
      <Pad>0</Pad>
      <Pad>.</Pad>
      <Pad color={'bright'} span={true}>
        =
      </Pad>
    </Container>
  )
}

export default Pads
