import React from 'react'
import styles from './Create.module.css'

function ArtworkType(props:any) {
    const typeList = ['Image', 'Audio', 'Video', 'GIF']
    function handleClick(e:any) {
        props.setMethod(e.target.value)
    }
    return (
        <div className={styles.artworkType}>
            <p className={styles.headTxt}>Artwork Type</p>
            <div className={styles.typeGroup}>
                {
                    typeList.map((item:any) => (
                        <button className={styles.typeItem} value={item} onClick={handleClick}>{item}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default ArtworkType