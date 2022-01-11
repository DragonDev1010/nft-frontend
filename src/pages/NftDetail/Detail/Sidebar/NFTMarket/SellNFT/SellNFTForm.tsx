import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const marketJSON = require('../../../../../../contracts/Market.json')
const marketContractAddr = process.env.REACT_APP_MARKET_ADDR

function SellNFTForm() {
    const [startDate, setStartDate] = useState(new Date());
    const marketContract = new web3.eth.Contract(marketJSON, marketContractAddr)
    async function sellNft() {
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            // sellingNFT(uint256 tokenId_, Currency currency_,  uint256 salePrice_, uint256 startTime_, uint256 endTime_)
            let tx = await marketContract.methods.sellingNFT().send({from: userWalletAddr[0]})
        } catch (error) {
            
        }
    }
    return(
        <form onSubmit={sellNft}>
            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">Price</label>
                    <input id="itemname" type="text" name="itemname" className="sign__input" placeholder=""/>
                </div>
                <div className="sign__group">
                    <label className="sign__label" htmlFor="number_of_copies">Currency</label>
                    <select id="number_of_copies" name="number_of_copies" className="sign__select">
                        <option value="1">ETH</option>
                        <option value="2">SGE</option>
                    </select>
                </div>
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">Start Time</label>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">End Time</label>
                </div>
            </div>
            <div className="col-12 col-xl-3">
                <button className="sign__btn">Sell NFT</button>
            </div>
        </form>
    )
}

export default SellNFTForm