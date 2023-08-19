import { ReactNode, useMemo, useState } from 'react';

import { THEME_LOCALSTORAGE_KEY } from '../../constants/localStorage';
import { Theme, ThemeContext } from '../../context/ThemeContext/ThemeContext';

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || 'light';

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initialTheme,
        children
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
