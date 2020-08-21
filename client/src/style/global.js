import { createGlobalStyle } from 'styled-components'
import { COLORS, FONTS } from './theme'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${FONTS.body};
    font-weight: 400;
    color: ${COLORS.text};
    font-size: 17px;
  }

  h1, h2, h3, h4, h5, h6, blockquote {
    font-family: ${FONTS.heading};
    font-weight: 600;
  }

  blockquote {
    font-style: italic;
    text-align: unset;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
