import {createContext} from "react";

export enum Theme{
    LIGHT = 'light',
    DARK= 'dark',
}

export interface ThemeContextProps {
    theme?:Theme;
    setTheme?:(theme:Theme) => void
}
export const ThemeContent = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'; /// Переменная которая определеят ключ,под которым будет сохранена текущая тема в локальном хранилилще