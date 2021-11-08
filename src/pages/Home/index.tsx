import React from 'react'
import styles from './Home.module.css'
import Intro from './Intro'
import Slide from './Slide'
import Feature from './Feature'
function Home() {
    return (
        <div>
            <div className={styles.homeHead}>
                <Intro/>
                <Slide/>
            </div>
            <Feature />
        </div>
    )
}

export default Home;