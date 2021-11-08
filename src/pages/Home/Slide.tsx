import React from 'react'
import SlideThumbnail from './SlideThumbnail'
import styles from './Home.module.css'
import SlideController from './SlideController'
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
            <SlideController />
            
        </div>
        
    )
}

export default Slide;