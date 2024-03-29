import {render} from "react-dom"
import App from "./app/App";
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "app/providers/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById('root'));
import "./shared/config/i18n/i18n"
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
