import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root with React 18

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

