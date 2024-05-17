import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './i18n.js';
import './assets/styles/index.css';
import App from './screens/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
