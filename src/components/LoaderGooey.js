import React from 'react';
import styles from '../styles/LoaderGooey.module.css'

let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = i + 1;
}

function App() {
    return (
        <div className={styles.container} >
            <div>
                {arr.map(i => <div className={styles.circle}/>)}
            </div>
            <div className='container_block'/>
        </div>
    );
}

export default App;
