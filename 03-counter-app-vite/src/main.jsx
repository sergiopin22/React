import React from 'react';
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirtsApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp/>
        <HelloWorldApp/>
    </React.StrictMode>
)