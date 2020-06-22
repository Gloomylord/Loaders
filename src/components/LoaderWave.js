import React from 'react';
import styles from '../styles/LoaderWave.module.css';

let arr = [];

for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
}

function App() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {
                    arr.map((i) => <div key={i} className={styles.loader} style={{'--i': i}}/>)
                }
            </div>
            <div className='container_block'/>
        </div>
    );
}

export default App;



