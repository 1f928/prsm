import React, { useContext } from 'react';
import { SettingsContext } from '../util/settings';

import { BsMoonStars } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';

import './Settings.css';

export default function Settings (props) {

  const {settings, updateSettings} = useContext(SettingsContext);
  const {brightness, theme} = settings;

  const updateBrightness = () => {
    const newSetting = (brightness === "light") ? "dark" : "light";
    updateSettings({brightness: newSetting});
  }

  const updateTheme = (themeName) => () => {
    if (theme !== themeName) updateSettings({theme: themeName});
  }

  return (
    <div className="settings">
      {(brightness === "light") ?
      <BsMoonStars className="brightness-icon moon" onClick={updateBrightness}/> :
      <IoSunnyOutline className="brightness-icon sun" onClick={updateBrightness} />}
      <div className="fake-settings" />
      {/* <ThemePicker /> */}
    </div>
  );
};