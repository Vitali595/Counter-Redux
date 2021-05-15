import React from 'react';
import './App.module.css';
import {SettingsForCounter} from "./settingsForCounter/SettingsForCounter";
import {Counter} from "./Counter/Counter";
import style from "./App.module.css";

function App() {
    return (
        <div className={style.app}>
            <SettingsForCounter/>
            <Counter/>
        </div>
    );
}

export default App;
