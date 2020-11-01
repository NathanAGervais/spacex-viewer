import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import { Header } from './components/Header';
import { Launches } from './components/Launches';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Launches />
    </ThemeProvider>
  );
}

export default App;
