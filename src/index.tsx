import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {HashRouter} from "react-router-dom";

const theme = createTheme({
        palette: {
            mode: "dark"
        }
    }
)

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HashRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//Provider-Компонент React, который позволяет потребителям подписываться на изменения контекста
// Принимает свойство value, которое должно быть передано потребителям, которые являются потомками данного провайдера. Один провайдер может быть связан со многими потребителями. Провайдеры могут быть вложенными, чтобы переопределять значения глубже в дереве.
reportWebVitals();
