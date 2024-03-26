import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContent} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult{
    toggleTheme:()=> void;
    theme:Theme;
}
export function useTheme():UseThemeResult{ // Данный хук возвращает тип UseThemeResult
    const {theme,setTheme} = useContext(ThemeContent);

    const toggleTheme = () =>{
        const newTheme = theme === Theme.DARK ? Theme.LIGHT :Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme);
    }

    return{
        theme,
        toggleTheme
    }
}