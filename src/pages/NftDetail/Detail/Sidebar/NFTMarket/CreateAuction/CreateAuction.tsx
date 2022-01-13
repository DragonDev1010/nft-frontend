import CreateAuctionForm from "./CreateAuctionForm"

function CreateAuction(props:any) {
    return(
        <>
            {
                props.cancel ? 
                <button style={{color:"white"}}>Cancel Auction</button>
                :
                <CreateAuctionForm nftId={props.nftId}/>
            }
        </>
    )
}

export default CreateAuction