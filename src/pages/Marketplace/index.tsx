import React from 'react';
import Filter from './Filter'
import List from './list/List'
import styles from './Marketplace.module.css'
function Marketplace() {
  return (
    <div className={styles.marketplaceWrapper}>
        <Filter/>
        <List/>
    </div>
  );
}

export default Marketplace;