// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Home from './pages/Home/';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'

import Header from './components/Header'
import Error from './components/Error'
import Freelances from './components/Freelances'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="*" element={<Error />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
