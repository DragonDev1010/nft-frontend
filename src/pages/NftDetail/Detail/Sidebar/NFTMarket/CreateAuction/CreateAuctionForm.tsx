import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const auctionJSON = require('../../../../../../contracts/Market.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

const starSeasNftJSON = require('../../../../../../contracts/StarSeasNFT.json')
const starSeasNftContractAddr = process.env.REACT_APP_STARSEASNFT_ADDR
function CreateAuctionForm(props:any) {
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date());
    const [currency, setCurrency] = useState('eth')
    const [price, setPrice] = useState('0')

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const auctionContract = new web3.eth.Contract(auctionJSON, auctionContractAddr)
    const starSeasNft = new web3.eth.Contract(starSeasNftJSON, starSeasNftContractAddr)
    let tx

    async function createAuction(event:any) {
        event.preventDefault()
        console.log(
            'Token Id: ', props.nftId,
            'Currency Type: ', currency,
            'Price: ', price,
            'Start Time: ', Math.round(startDate.getTime()/1000),
            'End Time: ', Math.round(endDate.getTime()/1000)
        )
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await starSeasNft.methods.approve(auctionContractAddr, props.nftId).send({from: userWalletAddr[0]})
            // function createAuction(uint256 tokenId_, Currency currency_, uint256 auctionPrice_, uint256 startTime_, uint256 endTime_)
            if(currency === 'eth'){
                tx = await auctionContract.methods
                    .createAuction(props.nftId, currency, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000))
                    .send({from: userWalletAddr[0]})
            } else {
                tx = await auctionContract.methods
                    .createAuction(props.nftId, currency, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000))
                    .send({from: userWalletAddr[0]})
            }
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
        } catch (error: any) {
            setTxFailed(error.message)
        }
    }
    return(
        <>
            <form onSubmit={createAuction}>
                <div className="col-12">
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">Price</label>
                        <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="" onChange={(e:any) => {setPrice(e.target.value)}}/>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="number_of_copies">Currency</label>
                        <select id="number_of_copies" name="number_of_copies" className="sign__select" onChange={(e:any) => {setCurrency(e.target.value)}}>
                            <option value="eth">ETH</option>
                            <option value="sge">SGE</option>
                        </select>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">Start Time</label>
                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">End Time</label>
                        <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} />
                    </div>
                </div>
                <div className="col-12 col-xl-3">
                    <button className="sign__btn">Create Auction</button>
                </div>
            </form>
        </>
    )
}

export default CreateAuctionForm