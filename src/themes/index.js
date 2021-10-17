import { useEffect } from 'react';

import DefaultTheme from './defaultTheme';

const themes = {
    "default": DefaultTheme
};

const brightnessOptions = [
    "light",
    "dark"
];

const loadTheme = (theme, brightness) => {

    if (!themes[theme]) {
        console.error(`Invalid theme: ${theme}`);
    }

    if (!brightnessOptions.includes(brightness)) {
        console.error(`Invalid brightness option: ${brightness}`);
    }

    console.log(`CHANGING THEME: ${theme}`)
    const themeValues = themes[theme][brightness];
    Object.keys(themeValues).forEach(key => {
        document.getElementById('root').style.setProperty(key, themeValues[key]);
    });
}

const ThemeProvider = ({theme, brightness}) => {

    useEffect(() => {
        loadTheme(theme, brightness);
    }, [theme, brightness]);

    return null
};

export default ThemeProvider;
