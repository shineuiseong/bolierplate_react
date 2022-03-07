import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    
}
body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button,img{
    cursor:pointer;

}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
#root {
  width: 100%;
  height: 100%;
}

`

export default GlobalStyle
