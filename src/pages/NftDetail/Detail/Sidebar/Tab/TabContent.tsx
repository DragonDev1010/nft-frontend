import BidsTab from "./TabContents/BidsTab"
import DetailsTab from "./TabContents/DetailsTab"
import HistoryTab from "./TabContents/HistoryTab"

function TabContent() {
    return(
        <>
            <div className="tab-content">
                <DetailsTab/>
                <BidsTab/>
                <HistoryTab/>
            </div>
        </>
    )
}

export default TabContent