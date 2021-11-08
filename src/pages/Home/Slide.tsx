import React from 'react'
import SlideThumbnail from './SlideThumbnail'
import styles from './Home.module.css'
function Slide() {
    return (
        <div className={styles.slide}>
            <div className={styles.slideWrap}>
                <div className={styles.curSlide}>
                    <SlideThumbnail />
                </div>
                <div className={styles.slideBack}>
                    <div className={styles.preSlide}>
                        <SlideThumbnail />
                    </div>
                    <div className={styles.nextSlide}>
                        <SlideThumbnail />
                    </div>
                </div>
            </div>    
            <div className={styles.slideControl}>
                <button>Prev</button>
                <button>Next</button>
            </div>
            
        </div>
        
    )
}

export default Slide;