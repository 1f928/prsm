import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';

import { BsMoonStars } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';

import './LightToggle.css';

export default function LightToggle (props) {

  const {settings, updateSettings} = useContext(SettingsContext);
  const {brightness} = settings;

  const updateBrightness = () => {
    const newSetting = (brightness === "light") ? "dark" : "light";
    updateSettings({brightness: newSetting});
  }

  // const updateTheme = (themeName) => () => {
  //   if (theme !== themeName) updateSettings({theme: themeName});
  // }

  return (
    <div className="light-toggle">
      {(brightness === "light") ?
      <BsMoonStars className="brightness-icon moon" onClick={updateBrightness}/> :
      <IoSunnyOutline className="brightness-icon sun" onClick={updateBrightness} />}
    </div>
  );
};