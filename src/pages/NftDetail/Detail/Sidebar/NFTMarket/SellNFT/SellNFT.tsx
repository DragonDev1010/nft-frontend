import SellNFTForm from "./SellNFTForm"

function SellNFT(props:any) {

    return(
        <>
            {
                props.cancel ?
                <button style={{color:"white"}}>Cancel selling</button>
                :
                <SellNFTForm/>
            }
        </>
    )
}

export default SellNFT