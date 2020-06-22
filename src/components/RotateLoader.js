import React from 'react';
import styles from '../styles/RotateLoader.module.css';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.colors}>
                <div className={styles.circle}/>
                <div className={styles.block}/>
            </div>
            <div className='container_block'/>
        </div>
    );
}

export default App;




