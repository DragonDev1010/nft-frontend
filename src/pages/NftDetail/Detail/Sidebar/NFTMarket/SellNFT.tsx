function SellNFT(props:any) {
    return(
        <>
            {
                props.cancel ?
                <button style={{color:"white"}}>Cancel selling</button>
                :
                <button style={{color:"white"}}>Sell NFT</button>
            }
        </>
    )
}

export default SellNFT