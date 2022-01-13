import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'

const auctionJSON = require('../../../../../../contracts/Auction.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

function BidAuction(props:any) {
    const [price, setPrice] = useState('0')
    const [highest, setHighest] = useState(0)

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
    return(
        <form onSubmit={bid}>
            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">Bid Price <span>Highest Bid Price: {highest}</span></label>
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