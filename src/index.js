import './index.css';
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';
import { BrowserRouter as Router } from 'react-router-dom';



const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <Router>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Router>
);
