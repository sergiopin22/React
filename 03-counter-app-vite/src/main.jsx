import React from 'react';
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={100}/>
        {/* <FirstApp title='No hay un titulo' subTitle='No hay subtitulo' name = 'Alejandro Pinzon' /> */}
    </React.StrictMode>
)