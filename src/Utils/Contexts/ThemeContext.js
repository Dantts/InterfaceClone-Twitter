import React, {useState, useContext, createContext, useEffect} from 'react';
import Light from '../../styles/Theme/Light';

const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem('theme');

        if(storageValue){
            return JSON.parse(storageValue);
        }else{
            return Light;
        };
    });

    const [colorTheme, setColorTheme] = useState(() => {
        const storageValue = localStorage.getItem('colorTheme');

        if(storageValue){
            return JSON.parse(storageValue);
        }else{
            return {title: 'blue', colorPrimary: 'rgb(29, 161, 242)', colorSecundary: 'rgba(29, 161, 242, 0.1)'};
        };
    })

    const [font, setFont] = useState(() => {
        const fontValue = localStorage.getItem('fontSize');

        if(fontValue){
            return JSON.parse(fontValue);
        }else{
            return {fontSizePixel: '0px', fontSizeNumber: '0'};
        }
    })

    useEffect(() => {
        localStorage.setItem('colorTheme', JSON.stringify(colorTheme));
    }, [colorTheme])

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);
    
    useEffect(() => {
        localStorage.setItem('fontSize', JSON.stringify(font));
    }, [font])

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                colorTheme, 
                setColorTheme,
                font, setFont
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

function ConfigContext(name) {
    const context = useContext(ThemeContext);
    if(!context) throw new Error (`${name} must be used within a ThemeProvider`);
    return context;
}

export function useColorTheme() {
    const {colorTheme, setColorTheme} = ConfigContext('useColorTheme');
    return {colorTheme, setColorTheme};
}

export function useTheme() {
    const {theme, setTheme} = ConfigContext('useTheme');
    return {theme, setTheme};
}

export function useFontSize() {
    const {font, setFont} = ConfigContext('useFontSize');
    return {font, setFont};

}