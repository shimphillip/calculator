import styled from 'styled-components'
import wave from '../../../assets/wave.png'

const Container = styled.div`
  position: relative;
  background: #f8f8fc;
  height: 300px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  text-align: right;
  padding-right: 5px;
  width: 99%;
  margin-left: 1px;

  .history {
    padding-top: 25px;
    font-size: 25px;
    height: 55px;

    span {
      color: #9d7fff;
    }
  }

  .display {
    padding-top: 5px;
    font-size: 40px;
  }

  .wave.animate {
    position: absolute;
    width: 100%;
    height: 143px;
    bottom: 0;
    left: 0;
    background: url(${wave});
    animation: animate 0.55s linear infinite;
  }

  @keyframes animate {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 1360px;
    }
  }
`

export default Container
