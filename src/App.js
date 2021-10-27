import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { LayoutContext, useLayoutInfo } from './context/layout';
import { SettingsContext, useSettings } from './context/settings';
import ThemeProvider from './themes';

import Home from './views/Home';
import Lab from './views/Lab';
import Stats from './views/Stats';

import Background from './Background';
import StartBar from './comps/StartBar';
import EndBar from './comps/EndBar';

import './App.css';

function App() {
  const {isLandscape, isMobile, width, height} = useLayoutInfo();
  const {settings, updateSettings} = useSettings();

  return (
    <SettingsContext.Provider value={{settings, updateSettings}}>
    <LayoutContext.Provider value={{isLandscape, isMobile}}>
    <ThemeProvider theme={settings.theme} brightness={settings.brightness} />
      <div className="app">
        <Background theme={settings.brightness} width={width} height={height} />
        <Router>
          <StartBar />
          <div className="content">
            <Switch>
              <Route path="/lab" component={Lab} />
              <Route path="/stats" component={Stats} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <EndBar />
        </Router>
      </div>
    </LayoutContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
