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
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Montserrat', sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`

export default GlobalStyle
