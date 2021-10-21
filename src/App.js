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
import Experiments from './views/Experiments';
import Stats from './views/Stats';

// import Background from './comps/Background';
import StartBar from './comps/StartBar';
import EndBar from './comps/EndBar';

import './App.css';

function App() {
  const {isLandscape, isMobile} = useLayoutInfo();
  const {settings, updateSettings} = useSettings();
  console.log(isLandscape, isMobile);

  return (
    <SettingsContext.Provider value={{settings, updateSettings}}>
    <LayoutContext.Provider value={{isLandscape, isMobile}}>
    <ThemeProvider theme={settings.theme} brightness={settings.brightness} />
      {/* <div className="app"> */}
        {/* <Background /> */}
        <Router>
          <StartBar />
          <div className="content">
            <Switch>
              <Route path="/experiments" component={Experiments} />
              <Route path="/stats" component={Stats} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <EndBar />
        </Router>
      {/* </div> */}
    </LayoutContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
