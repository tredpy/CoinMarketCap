import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../../../config/themeContext/themeContext';

interface UseThemeResult {
    onToggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const onToggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || 'light',
        onToggleTheme
    };
}
