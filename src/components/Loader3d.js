import React from 'react';
import styles from '../styles/Loader3d.module.css';

function App() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.loader}/>
                <div className={styles.loader}/>
                <div className={styles.loader}/>
            </div>
            <div className='container_block'/>
        </div>
    );
}

export default App;
