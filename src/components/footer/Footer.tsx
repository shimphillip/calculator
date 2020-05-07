import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  margin-top: 15px;
  width: 320px;
  font-size: 20px;
  text-align: center;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: purple;
    }
  }
`

const Footer = () => {
  return (
    <Container>
      &copy; {new Date().getFullYear()} Phillip Shim{' '}
      <a
        href="https://github.com/shimphillip/wavy-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'</>'}
      </a>
    </Container>
  )
}

export default Footer
