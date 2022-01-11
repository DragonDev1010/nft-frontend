import AuctionTimer from './AuctionTimer'
import Info from './Info'
import TabContent from './Tab/TabContent'
import TabHead from './Tab/TabHead'
import {useState, useEffect} from 'react'
function Sidebar(props:any) {
    const [auctionEnd, setAuctionEnd] = useState(0)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [currency, setCurrency] = useState(0)
    const [creatorAddr, setCreatorAddr] = useState('')
    function getInfo() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].name !== undefined)
                    setName(res[0].name)
                if(res[0].currency !== undefined)
                    setCurrency(res[0].currency)
                if(res[0].price !== undefined)
                    setPrice(res[0].price)
                if(res[0].creatorAddr !== undefined)
                    setCreatorAddr(res[0].creatorAddr)
            })
    }
    useEffect(() => {
        getInfo()
    }, [])
    return(
        <div className="col-12 col-xl-4">
            <div className="asset__info">
                <Info name={name} currency={currency} price={price} creator={creatorAddr}/>
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