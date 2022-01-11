function CreateAuction(props:any) {
    return(
        <>
            {
                props.cancel ? 
                <button style={{color:"white"}}>Cancel Auction</button>
                :
                <button style={{color:"white"}}>Create Auction</button>
            }
        </>
    )
}

export default CreateAuction