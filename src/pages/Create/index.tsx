import React, {useState} from 'react'

function Create() {
    const [file, setFile] = useState()
    const [nft_name, setNft_name] = useState('')
    function handleChange(event: any) {
        setNft_name(event.target.value)
    }
    function convertFormeventForAPI(event: any) {
        return JSON.stringify({
            name: event.target.nft_name.value,
            files: event.target.nft_img.files[0]
        })
    }
    function handleSubmit(event: any) {
        event.preventDefault()
        // console.log(event.target.nft_img.files)
        // console.log(event.target.nft_img.files[0])
        var data = new FormData()
        data.append('file', event.target.nft_img.files[0])
        data.append('name', event.target.nft_name.value)
        console.log(typeof(data))
        fetch("http://127.0.0.1:8000/nfts",
            {
                method: 'POST',
                body: data
            }
        )
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='file' name='nft_img' /><br/>
                NFT Name: <input type='text' name='nft_name' onChange={handleChange}/> <br/>
                NFT Description: <textarea name='nft_des' /> <br/>

                <input type='submit' value='Create'/>
            </form>
        </>
    )
}

export default Create