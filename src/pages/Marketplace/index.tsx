import React from 'react';
import Filter from './Filter'
import List from './List'
import styles from './Marketplace.module.css'
function Marketplace() {
  return (
    <div className={styles.Marketplace}>
        <Filter/>
        <List/>
    </div>
  );
}

export default Marketplace;