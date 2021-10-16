import React, { useContext } from 'react';
import { SettingsContext } from '../util/settings';

import { BsMoonStars } from 'react-icons/bs';

import './Settings.css';

export default function Settings (props) {
  const {settings, setSettings} = useContext(SettingsContext);
  const updateBrightness = () => {
    const newSetting = (settings.brightness === "light") ? "dark" : "light";
    setSettings({...settings, brightness: newSetting});
  }

  return (
    <div className="settings">
      <BsMoonStars className="brightness-icon" onClick={updateBrightness}/>
      <div className="fake-settings" />
      {settings.brightness}
      {/* <ThemePicker /> */}
    </div>
  );
};