import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppThemeProviders from './components/AppThemeProvider';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-datetime/css/react-datetime.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProviders>
      <App />
    </AppThemeProviders>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
