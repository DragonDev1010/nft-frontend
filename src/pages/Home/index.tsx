import Hero from "./hero/Hero";
import FeatureArea from "./featureArea/FeatureArea";
import LiveAuction from "./liveAuction/LiveAuction";
import TopSeller from "./topCreators/TopCreators";
import Explorer from "./explorer/Explorer";
import CallAction from "./callAction/CallAction";
function Home() {
    return (
        // <div className={styles.home}>
        //     <div className={styles.homeHead}>
        //         <Intro/>
        //         <Slide/>
        //     </div>
        //     <Feature />
        // </div>
        <main className = "main">

            {/* home hero */}
            <Hero/>
            {/* end home hero */}
    
            {/* feature-area */}
            <FeatureArea />
            {/* end feature-area */}      

            {/* live auctions */}
            <LiveAuction />
            {/* end live auctions */}

            {/* top sellers */}
            <TopSeller />
    		{/* end top sellers */}

    		{/* explore */}
            <Explorer/>
    		{/* end explore */}

    		{/* call-to-action */}
            <CallAction/>
    		{/* call-to-action end */}
	</main>
    )
}

export default Home;