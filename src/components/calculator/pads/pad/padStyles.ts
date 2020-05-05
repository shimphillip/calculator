import styled from 'styled-components'

interface IContainer {
  color?: 'bright'
}

const Container = styled.button<IContainer>`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ color }) => color === 'bright' && '#9d7fff'};
`

export default Container
