import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoggedinStatusContextProvider } from './context/LoggedinStatusContext';
import { NewsArticleContextProvider } from './context/newsArticleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewsArticleContextProvider>
      <LoggedinStatusContextProvider>
        <App />
      </LoggedinStatusContextProvider>
    </NewsArticleContextProvider>
  </React.StrictMode>
);
