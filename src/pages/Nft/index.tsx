import React from 'react'
import { withRouter } from 'react-router'
import styles from './Nft.module.css'
function Nft({match}: any) {
    console.log("match: ", match.params)
    
    return (
        <div className={styles.one}>
            <h1>this is nft item : {match.params.nftId}</h1>
            {/* this is nft item */}
        </div>
    )
}

export default Nft
