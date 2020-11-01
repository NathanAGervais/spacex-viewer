import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return <div className="App">Hello World</div>;
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
}

export default App;
