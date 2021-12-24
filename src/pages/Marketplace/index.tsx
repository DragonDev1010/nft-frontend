import Breadcrumb from './breadcrumb/Breadcrumb';
import ExplorerArea from './explorerArea/ExplorerArea';

function Marketplace(props: any) {
	return (
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