import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>,
)
