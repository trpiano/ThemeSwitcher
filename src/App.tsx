import React from 'react';
import { ThemeProvider } from 'styled-components'

import Header from './components/Header/index'
import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global'

import { useClearCacheCtx } from 'react-clear-cache'

//Import Themes
import light from './styles/themes/light'
import dark from './styles/themes/dark'
 
function App() {

  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = ( ) => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx()

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        {!isLatestVersion && (
          <p>
            <a
              href='#'
              onClick={e => {e.preventDefault(); emptyCacheStorage()}}
            >Update Version</a>
          </p>
        )} 
      </div>
    </ThemeProvider>
  );
}

export default App;
