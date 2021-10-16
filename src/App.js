import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { MobileContext, useMobileCheck } from './util/mobility';
import { SettingsContext, defaultSettings } from './util/settings';

import Home from './views/Home';
import Experiments from './views/Experiments';
import Stats from './views/Stats';

import Background from './comps/Background';
import Topbar from './comps/Topbar';
import Botbar from './comps/Botbar';
import Leftbar from './comps/Leftbar';
import Rightbar from './comps/Rightbar';

import './App.css';

function App() {
  const isMobile = useMobileCheck();
  const [settings, setSettings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={{settings, setSettings}}>
    <MobileContext.Provider value={isMobile}>
      <div className="app">
        <Background />
        <Router>
          {isMobile ? <Topbar /> : <Leftbar />}
          <div className="content">
            <Switch>
              <Route path="/experiments" component={Experiments} />
              <Route path="/stats" component={Stats} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          {isMobile ? <Botbar /> : <Rightbar />}
        </Router>
      </div>
    </MobileContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
