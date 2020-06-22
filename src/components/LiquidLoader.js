import React from "react";

import styles from '../styles/LiquidLoader.module.css';


let arr = [];
for (let i = 0; i < 6; i++) {
    arr[i] = i + 1;
}

function App() {


    return (
        <div className={styles.bg}>
            <section className={styles.container}>
                {arr.map((i) => <div className={styles.circle} key={i} i={i}/>)}
                <span className={styles['loading-text']}>LIQUID</span>
                <svg className={styles.svg}>
                    <defs>
                        <filter id="filter">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="filter"/>
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>
            </section>
            <div className='container_block'/>
        </div>
    );
}

export default App;