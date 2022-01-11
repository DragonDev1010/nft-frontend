import * as FaIcons from 'react-icons/fa'
function AuctionTimer() {
    return(
        <div className="asset__wrap">
            <div className="asset__timer asset__timer2">
                <span><FaIcons.FaStopwatch/> Auction ends in</span>
                <div className="asset__clock"></div>
            </div>

            <div className="asset__price">
                <span>Minimum bid</span>
                <span>0.9 ETH</span>
            </div>
        </div>        
    )
}

export default AuctionTimer