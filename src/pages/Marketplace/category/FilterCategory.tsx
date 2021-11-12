import React, {useState} from 'react'
import styles from '../Marketplace.module.css'
import FilterCategoryOptions from './FilterCategoryOptions'
import * as FaIcons from "react-icons/fa";
function FilterCategory() {
    const [show, setShow] = useState(true)
    const categories = ['Galaxies', 'Clusters', 'Nebulae', 'Lunar', 'Solar', 'Sci-Fi', 'Cretives']
    function showOptions(e:any) {
        e.preventDefault()
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return(
        <div className={styles.filCategoryWrap}>
            <div className={styles.filName} onClick={showOptions}>
                <div>
                    <FaIcons.FaCircle size={15}/>
                    Category
                </div>
                <FaIcons.FaArrowUp size={15}/>
            </div>
            {
                show ?
                categories.map((item: any, idx:any) => (
                    <FilterCategoryOptions data={item} id={idx}/>
                ))
                
                :
                ""
            }
            
        </div>
    )
}

export default FilterCategory