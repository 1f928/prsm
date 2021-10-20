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

    // Override transitions for theme switch: (taken from https://paco.sh/blog/disable-theme-transitions)
    const css = document.createElement('style');
    css.appendChild(
        document.createTextNode(
            `* {
                -webkit-transition: none !important;
                -moz-transition: none !important;
                -o-transition: none !important;
                -ms-transition: none !important;
                transition: none !important;
            }`
        )
    );
    
    document.head.appendChild(css);

    const themeValues = themes[theme][brightness];
    Object.keys(themeValues).forEach(key => {
        document.getElementById('root').style.setProperty(key, themeValues[key]);
    });

    // Force a render and then re-enable transitions:
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
}

const ThemeProvider = ({theme, brightness}) => {

    useEffect(() => {
        loadTheme(theme, brightness);
    }, [theme, brightness]);

    return null
};

export default ThemeProvider;
