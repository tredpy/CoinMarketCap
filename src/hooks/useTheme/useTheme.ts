import { useContext } from 'react';

import { Theme, ThemeContext } from 'context/ThemeContext/ThemeContext';

import { THEME_LOCALSTORAGE_KEY } from 'assets/const/localStorage';

interface UseThemeResult {
    onToggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const onToggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme?.(newTheme);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };

    return {
        theme: theme || 'light',
        onToggleTheme
    };
}
