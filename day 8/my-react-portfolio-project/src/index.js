
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

const divTag = document.getElementById("root");

const boot = ReactDOM.createRoot(divTag);
 
boot.render(<App />)