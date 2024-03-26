import {render} from "react-dom"
import Counter from "./components/Counter";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
