import { BrowserRouter } from 'react-router-dom'
import Router from './pages/Router';

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './css/styles'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
