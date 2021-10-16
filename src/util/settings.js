import React from 'react';

const defaultSettings = {
  brightness: "light",
  setBrightness: () => {},

  theme: "default",
  setTheme: () => {}
};

const SettingsContext = React.createContext(defaultSettings);

export {
  SettingsContext,
  defaultSettings
};