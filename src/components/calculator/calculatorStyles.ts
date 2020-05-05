import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 640px;
  border: solid 1.5rem #9d7fff;
  border-radius: 3rem;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 20px;
    background: #9d7fff;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 10px;
    background: #8762ff;
    border-radius: 10px;
  }
`

export default Container
