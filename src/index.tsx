import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import { StoreProvider } from 'store/StoreProvider';
import { ErrorBoundary } from 'utils/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from 'utils/ThemeProvider/ThemeProvider';

import 'libs/i18n/i18n';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
