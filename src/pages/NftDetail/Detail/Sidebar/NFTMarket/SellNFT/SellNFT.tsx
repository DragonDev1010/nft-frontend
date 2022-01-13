import CreateSellNFT from "./CreateSellNFT"
import CancelSellNFT from "./CancelSellNFT"
function SellNFT(props:any) {

    return(
        <>
            {
                props.cancel ?
                <CancelSellNFT nftId={props.nftId}/>
                :
                <CreateSellNFT nftId={props.nftId}/>
            }
        </>
    )
}

export default SellNFT