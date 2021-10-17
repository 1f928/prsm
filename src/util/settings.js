import React, { useState } from 'react';

const defaultSettings = {
  brightness: "light",
  theme: "default"
};

const useSettings = () => {
  const [settings, setSettings] = useState(defaultSettings);

  const updateSettings = (settingObj) => {
    setSettings({...settings, ...settingObj});
  };

  return {settings, updateSettings}
};

const SettingsContext = React.createContext(defaultSettings);

export {
  SettingsContext,
  defaultSettings,
  useSettings
};