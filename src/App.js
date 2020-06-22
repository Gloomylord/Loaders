import React from 'react';
import './App.css';
import LiquidLoader from './components/LiquidLoader';
import LoaderShadow from './components/LoaderShadow';
import RotateLoader from './components/RotateLoader';
import Loader3d from './components/Loader3d';
import LoaderScale from './components/LoaderScale';
import LoaderWave from './components/LoaderWave';
import LoaderGooey from './components/LoaderGooey';

function App() {
    return (
        <div className='bg_container'>
            <div className="main">
                <LoaderShadow/>
                <RotateLoader/>
                <Loader3d/>
                <LoaderWave/>
                <LoaderScale/>
                <LoaderGooey/>
                <LiquidLoader/>
            </div>
        </div>
    );
}

export default App;
