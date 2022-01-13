import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
import AuctionTimer from '../../AuctionTimer'
const auctionJSON = require('../../../../../../contracts/Auction.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

function BidAuction(props:any) {
    const [price, setPrice] = useState('0')
    const [highest, setHighest] = useState(0)
    const [endTime, setEndTime] = useState(0)

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const auctionContract = new web3.eth.Contract(auctionJSON, auctionContractAddr)
    
    let tx
    async function bid(event: any) {
        event.preventDefault()
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await auctionContract.methods
                .Bidding(props.nftId, price)
                .send({from: userWalletAddr[0]})
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
        } catch (error: any) {
            setTxFailed(error.message)
        }
    }
    function getHighestBid() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'auctions/' + props.nftId
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].highestBid !== undefined)
                    setHighest(res[0].highestBid)
                if(res[0].endTime !== undefined)
                    setEndTime(res[0].endTime)
            })
    }
    useEffect(() => {
        getHighestBid()
    })
    return(
        <form onSubmit={bid}>
            <AuctionTimer endTime={endTime} highest={highest}/>
            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">Bid Price</label>
                    <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="" onChange={(e:any) => {setPrice(e.target.value)}}/>
                </div>
            </div>
            <div className="col-12 col-xl-3">
                <button style={{color:"white"}} onClick={bid}>Bid Auction</button>
            </div>
        </form>
    )
}

export default BidAuction