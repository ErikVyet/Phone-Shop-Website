import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import App from './App.tsx';
import { createContext, type Dispatch, type SetStateAction } from 'react';

export const ThemeContext = createContext<{
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
} | null>(null);

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)