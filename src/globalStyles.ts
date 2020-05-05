import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
				padding: 0;
    }

		html {
			box-sizing: border-box;
			font-size: 10px;
		}

    body {
      font-family: 'Montserrat', sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`

export default GlobalStyle
