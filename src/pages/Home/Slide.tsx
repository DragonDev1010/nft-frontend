import React, {useEffect, useState} from 'react'
import SlideThumbnail from './SlideThumbnail'
import styles from './Home.module.css'
import SlideController from './SlideController'

import user1 from '../../assets/home/slideShow/1.jpg'
import user2 from '../../assets/home/slideShow/2.jpg'
import user3 from '../../assets/home/slideShow/3.jpg'
function Slide() {
    const [curSlide, setCurSlide] = useState(0)
    const [slideItems, setSlideItems] = useState([
        {
            image: user1,
            name: "User One",
            email: "userOne@stars.com"
        },
        {
            image: user2,
            name: "User Two",
            email: "userTwo@stars.com"
        },
        {
            image: user3,
            name: "User Three",
            email: "userThree@stars.com"
        }
    ])
    useEffect(() => {
        
        
    }, [])
    console.log(slideItems)
    
    return (
        <div className={styles.slide}>
            <div className={styles.slideWrap}>
                <div className={styles.curSlide}>
                    <SlideThumbnail data={slideItems[curSlide]}/>
                </div>
                <div className={styles.slideBack}>
                    <div className={styles.preSlide}>
                        {
                            curSlide == 0 ?
                                <SlideThumbnail data={slideItems[slideItems.length - 1]}/>
                            :
                                <SlideThumbnail data={slideItems[curSlide - 1]}/>
                        }
                    </div>
                    <div className={styles.nextSlide}>
                        {
                            curSlide == slideItems.length - 1 ?
                                <SlideThumbnail data={slideItems[0]}/>
                            :
                                <SlideThumbnail data={slideItems[curSlide + 1]}/>
                        }
                    </div>
                </div>
                
                
            </div>    
            <SlideController curSlide = {curSlide} setCurSlide = {setCurSlide} slideLen = {slideItems.length}/>
        </div>
        
    )
}

export default Slide;