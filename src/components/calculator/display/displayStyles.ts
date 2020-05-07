import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  background: #f8f8fc;
  margin-top: 20px;
  height: 200px;
  border-radius: 1.5rem;
  text-align: right;
  padding-right: 5px;
  margin-right: 1px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 160px;
  }

  &::before {
    height: 80px;
    background-color: #f8f8fc;
    bottom: -25px;
    left: 0px;
  }

  &::after {
    height: 82px;
    background-color: #fff;
    bottom: -72.5px;
    right: 1px;
  }

  .history {
    padding-top: 70px;
    font-size: 25px;
    height: 100px;

    span {
      color: #9d7fff;
    }
  }

  .display {
    padding-top: 5px;
    font-size: 40px;
  }
`

export default Container
