import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { store } from './store/store';

import App from './App';

import './index.css';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
