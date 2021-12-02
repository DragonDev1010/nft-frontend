import React, {useState} from 'react'
import styles from './Home.module.css'

function SlideController(props: any) {
    function previous() {
        if(props.curSlide == 0) {
            props.setCurSlide(props.slideLen - 1)
        } else {
            props.setCurSlide(props.curSlide - 1)
        }
    }
    function next() {
        if(props.curSlide == props.slideLen - 1) {
            props.setCurSlide(0)
        } else {
            props.setCurSlide(props.curSlide + 1)
        }
    }
    return(
        <div className={styles.slideControl}>
            <button onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.442" height="33.442" viewBox="0 0 33.442 33.442">
                    <path id="icons8-right" d="M16.721,0A16.721,16.721,0,1,0,33.442,16.721,16.739,16.739,0,0,0,16.721,0ZM22.09,17.213l-7.664,7.664a.7.7,0,0,1-1.189-.493v-2.09a.7.7,0,0,1,.2-.493l5.081-5.081L13.441,11.64a.7.7,0,0,1-.2-.493V9.057a.7.7,0,0,1,1.189-.493l7.664,7.664A.7.7,0,0,1,22.09,17.213Z" transform="translate(33.442 33.442) rotate(180)" fill="#35f2fe"/>
                </svg>
            </button>
            <button onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.442" height="33.442" viewBox="0 0 33.442 33.442">
                    <path id="icons8-right" d="M16.721,0A16.721,16.721,0,1,0,33.442,16.721,16.739,16.739,0,0,0,16.721,0ZM22.09,17.213l-7.664,7.664a.7.7,0,0,1-1.189-.493v-2.09a.7.7,0,0,1,.2-.493l5.081-5.081L13.441,11.64a.7.7,0,0,1-.2-.493V9.057a.7.7,0,0,1,1.189-.493l7.664,7.664A.7.7,0,0,1,22.09,17.213Z" fill="#35f2fe"/>
                </svg>
            </button>
        </div>
    )
}

export default SlideController