import React from 'react'
import styles from './Create.module.css'

function ArtworkType(props:any) {
    const typeList = ['Image', 'Audio', 'Video', 'GIF']
    function handleClick(e:any) {
        props.setMethod(e.target.id)
    }
    return (
        <div className={styles.artworkType}>
            <p className={styles.headTxt}>Artwork Type</p>
            <div className={styles.typeGroup}>
                {
                    typeList.map((item:any) => (
                        props.artType === item ?
                        <p style={{color:'#FF01DD', border:'2px solid #FF01DD'}} className={styles.typeItem} id={item} onClick={handleClick}>{item}</p>
                        :
                        <p className={styles.typeItem} id={item} onClick={handleClick}>{item}</p>
                    ))
                }
            </div>
            <span style={{display: 'block', background:'white', width: '80%', height: '3px', margin:'25px auto 0'}}></span>
        </div>
    )
}

export default ArtworkType