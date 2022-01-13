import SellNFT from "./SellNFT/SellNFT"
import BuyNFT from "./BuyNFT"
import BidAuction from "./BidAuction"
import CreateAuction from "./CreateAuction/CreateAuction"
import {useState, useEffect} from 'react'
import SelectedFiltersDetail from "../../../../Marketplace/explorerArea/sideBar/SelectedFilters/SelectedFiltersDetail"
function NFTMarket(props:any) {
    const [user, setUser] = useState<any>('')
    useEffect(() => {
        if(localStorage.getItem('wallet') !== null && localStorage.getItem('wallet') !== undefined)
            setUser(localStorage.getItem('wallet'))
    },[])
    return(
        <>  
            <SellNFT cancle={false} nftId = {props.nftId}/>
            <CreateAuction nftId={props.nftId}/>
            {/* {
                user === props.owner ?
                (() => {
                    switch (props.nftState) {
                        case 0: // Sale
                            return (
                                // Cancel Sale
                                <SellNFT cancle={true}/>
                            )
                            break;
                        case 1:  // Auction
                            return (
                                // Cancel Auction 
                                <CreateAuction cancle={true}/>
                            )
                            break;
                        case 2: // None
                            return (
                                //  Create Sale or Auction 
                                <>
                                    <SellNFT cancle={false}/>
                                    <CreateAuction cancle={false}/>
                                </>
                            )
                            break;
                    }
                })()
                :
                (() => {
                    switch (props.nftState) {
                        case 0: // Sale
                            return (
                                //  Buy NFT 
                                <BuyNFT owner={false}/>
                            )
                            break;
                        case 1: // Auction
                            return (
                                //  Bid Auction 
                                <BidAuction owner={false}/>
                            )
                            break;
                        case 2: // None
                            return (
                                <></>
                            )
                            break;
                    }
                })()
            } */}
        </>
    )
}

export default NFTMarket