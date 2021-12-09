import React from 'react'
import styles from './Home.module.css'

function FeatureItem(props: any) {
    return (
        <div className={styles.featureItem}>
            <div dangerouslySetInnerHTML={{ __html: props.icon }} className={styles.featureItemIcon} />
            <p className={styles.featureItemHeader}>{props.header}</p>
            <p className={styles.featureItemDetail}>{props.detail}</p>
        </div>
    )
}
export default FeatureItem