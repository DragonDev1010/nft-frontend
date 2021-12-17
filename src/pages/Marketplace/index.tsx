// import Filter from './Filter'
// import List from './list/List'
// import styles from './Marketplace.module.css'
import Breadcrumb from './breadcrumb/Breadcrumb';
import ExplorerArea from './explorerArea/ExplorerArea';

function Marketplace(props: any) {
	return (
		// <div className={styles.marketplaceWrapper}>
		// 	<Filter/>
		// 	<List category={props.category}/>
		// </div>
		<main className="main">
			{/* breadcrumb */}
			<Breadcrumb />
			{/* end breadcrumb */}
			{/* explore area */}
			<ExplorerArea />
			{/* explore area end */}
		</main>
	);
}

export default Marketplace;