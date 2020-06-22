import React from 'react';
import styles from '../styles/LoaderScale.module.css';

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = i + 1;
}

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                {
                    arr.map((i)=><div key={i} className={styles.loader} style={{'--i':i}}/>)
                }
            </div>
            <div className='container_block'/>
        </div>
    );
}

export default App;



