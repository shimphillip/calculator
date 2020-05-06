import styled from 'styled-components'

interface IContainer {
  color?: 'bright'
  span?: boolean
}

const Container = styled.button<IContainer>`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => color === 'bright' && '#9d7fff'};
  grid-column: ${({ span }) => span && 'span 2'};

  &:hover {
    font-weight: bold;
  }
`

export default Container
