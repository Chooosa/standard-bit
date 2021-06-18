import React from 'react';

import { AppWrapper, AppContainer } from './App.styles'
import Header from './components/Header/header.components';
import Main from './pages/Main/main.components'

function App() {
  return (
    <AppWrapper>
      <Header />
      <AppContainer>
        <Main />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;