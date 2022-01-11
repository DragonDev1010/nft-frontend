import AuctionTimer from './AuctionTimer'
import Info from './Info'
import TabContent from './Tab/TabContent'
import TabHead from './Tab/TabHead'
function Sidebar() {
    return(
        <div className="col-12 col-xl-4">
            <div className="asset__info">
                <Info/>
                <TabHead/>
                <TabContent/>
                <AuctionTimer/>
                <div className="asset__btns">
                    <a href="#modal-bid" className="asset__btn open-modal">Place a bid</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar