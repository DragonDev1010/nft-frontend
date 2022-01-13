import SellNFTForm from "./SellNFTForm"

function SellNFT(props:any) {

    return(
        <>
            {
                props.cancel ?
                <button style={{color:"white"}}>Cancel selling</button>
                :
                <SellNFTForm nftId={props.nftId}/>
            }
        </>
    )
}

export default SellNFT