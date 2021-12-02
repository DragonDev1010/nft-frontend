import React from 'react';
import Filter from './Filter'
import List from './list/List'
import styles from './Marketplace.module.css'
function Marketplace(props: any) {
	return (
		<div className={styles.marketplaceWrapper}>
			<Filter/>
			<List category={props.category}/>
		</div>
	);
}

export default Marketplace;