import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import { StoreProvider } from 'common/utils/StoreProvider/StoreProvider';
import { ErrorBoundary } from 'common/utils/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from 'common/utils/ThemeProvider/ThemeProvider';

import 'common/libs/i18n/i18n';

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
