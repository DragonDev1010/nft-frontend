import React from 'react'
import styles from './Create.module.css'

function Category(props:any) {
    const categoryList = ['Galaxies', 'Clusters', 'Nebulae', 'Lunar', 'Solar', 'Sci-Fi', 'Cretives']
    function handleChange(e:any) {
        props.setMethod(e.target.value)
    }
    return (
        <div className={styles.category}>
            <p className={styles.headTxt}>Category</p>
            <select className={styles.catList} onChange={handleChange}>
                <option className={styles.catItem}>Select Category</option>
                {
                    categoryList.map((item:any) => (
                        <option className={styles.catItem} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Category